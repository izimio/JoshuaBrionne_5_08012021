//localStorage.clear();
// FUNCTIONS //

// function to block the repetition of the same object //
function antiRep(value) {
    var ProductId = GetId(value);
    antiRepeat[ProductId]++;
    return (ProductId);
}

// Getting with a product's ID his reference
function GetId(value) {
    var productId = value.substr(23);
    parseInt(productId, 10);
    productId -= 3
    return (productId);
}

// showing the quantity of an item 
function checkQuantity(index) {
    var numberOfX = document.getElementById('numberOf' + index);
    numberOfX.innerHTML = quantity[index];
}

// ajusting the price depending on the "+" & the "-"

function adjustingThePrice(value) {
    var tabPrice = localStorage.getItem("TabAllApi");
    tabPrice = JSON.parse(tabPrice);
    return (tabPrice[value].price) / 100;
}
// ================= //


// CREATINGS mains VARIABLE //
const main = document.getElementById('recapAll');
const price = document.getElementById('allcost');
const itemNumber = document.getElementById('cartIndex');
var i = -1;
var index;

var antiRepeat = [
    0,
    0,
    0,
    0,
    0
];
// ============ //

// LOCAL STORAGE ANTIREPEAT // 
var quantity = localStorage.getItem("quantity");
quantity = JSON.parse(quantity);
// =================== // 

//  REFRESHING THE nums'S VALUE//
let nums = localStorage.getItem("PricesAndNums");
if (nums) {
    nums = JSON.parse(nums);
    price.innerHTML = nums.TotalPrice + ",00 €"; // total price
    itemNumber.innerHTML = nums.TotalItemsNumber;
} else {
    price.innerHTML = "0,00 €"; // total price
    itemNumber.innerHTML = "0";
}
// =========================== // 

// OPENING AND GETTING READY TO SHOW THE BASKET // 

var storage = localStorage.getItem("TabAllInfos");
storage = JSON.parse(storage);
if (!storage) {

} else {
    let products = storage.products;
    main.innerHTML = "";
    while (++i != storage.products.length) {
        index = antiRep(storage.products[i]._id); // BLOCKING THE REPETITION OF ARTICLES //           
        if (antiRepeat[index] <= 1 && storage.products[i]) {
            main.innerHTML +=
                `<div class="recapitulatif_all_each" id="recap${GetId(storage.products[i]._id)}">
                        <div class="recapitulatif_all_each-image">
                            <img src="${storage.products[i].imageUrl}" alt="photo de ${storage.products[i].name}">
                        </div>
                        <div class="recapitulatif_all_each-infos">
                            <div class="recapitulatif_all_each-infos-left">
                                <h3>${storage.products[i].name}</h3>
                                <p>${storage.products[i].description}</p>
                                <div class="recapitulatif_all_each-infos-left-tab">
                                    <div class="recapitulatif_all_each-infos-left-tab-minus">
                                        <p onclick="modifyValueMinus()" id="minu${GetId(storage.products[i]._id)}">-</p>
                                    </div>
                                    <div class="recapitulatif_all_each-infos-left-tab-select">
                                        <p id="numberOf${GetId(storage.products[i]._id)}"> </p>
                                    </div>
                                    <div class="recapitulatif_all_each-infos-left-tab-plus">
                                        <p id="plus${GetId(storage.products[i]._id)}" onclick="modifyValuePlus()">+</p>
                                    </div>
                                </div>
                            </div>
                            <div class="recapitulatif_all_each-infos-right">
                                <div class="recapitulatif_all_each-infos-right-cross" id="crossDiv">
                                    <i class="far fa-trash-alt" id="cross${GetId(storage.products[i]._id)}" onclick="deletingElement()"></i>
                                    <p id="crossInfo"></p>
                                </div>
                                <div class="recapitulatif_all_each-infos-right-price">
                                    <p>${storage.products[i].price},00 €</p>
                                </div>
                            </div>
                        </div>
                    </div>`
        }
        checkQuantity(index);
    }
}

// INFOS ABOUT DELETING AN ELEMENT // 
const crossDiv = document.getElementById("crossDiv");
crossDiv.addEventListener('mouseover', function (event) {
    event.stopPropagation();

    var crossinfo = document.getElementById('crossInfo')
    crossinfo.classList.add('recapitulatif_all_each-infos-right-cross-info')
    crossinfo.innerHTML = "supprimer l'article";
});
crossDiv.addEventListener('mouseout', function () {
    var crossinfo = document.getElementById('crossInfo')
    crossinfo.innerHTML = "";
});
// ================================ //

function deletingElement(aEvent) {
    var g = aEvent ? aEvent : window.event;
    var ProductId = g.target.id;
    ProductId = ProductId.substr(5);
    parseInt(ProductId, 10);
    let i = -1;
    while (++i < storage.products.length) {
        if (storage.products[i].index == ProductId) {
            storage.products.splice(i, 1);
            i = -1;
        }
    }
    nums.TotalItemsNumber -= (quantity[ProductId])
    itemNumber.innerHTML = nums.TotalItemsNumber;
    nums.TotalPrice -= (quantity[ProductId] * adjustingThePrice(ProductId));
    price.innerHTML = nums.TotalPrice + ",00 €"

    quantity[ProductId] = 0;
    localStorage.setItem("quantity", JSON.stringify(quantity));
    localStorage.setItem("TabAllInfos", JSON.stringify(storage));
    localStorage.setItem("PricesAndNums", JSON.stringify(nums));
    location.reload();
}

// functions that's refreshing the nums's value in case of a "+" or "-"
function modifyValuePlus(aEvent) {
    var e = aEvent ? aEvent : window.event;
    var t = e.target.id;
    t = t.substring(4);
    t = parseInt(t, 10);

    var totalNumberOfItem = document.getElementById('numberOf' + t);
    quantity[t]++;
    nums.TotalItemsNumber++;
    itemNumber.innerHTML = nums.TotalItemsNumber;
    nums.TotalPrice += adjustingThePrice(t);
    price.innerHTML = nums.TotalPrice + ",00 €"
    totalNumberOfItem.innerHTML = quantity[t];

    localStorage.setItem("quantity", JSON.stringify(quantity));
    localStorage.setItem("PricesAndNums", JSON.stringify(nums));
}

function modifyValueMinus(aEvent) {
    var e = aEvent ? aEvent : window.event;
    var t = e.target.id;
    t = t.substring(4);
    t = parseInt(t, 10);

    var totalNumberOfItem = document.getElementById('numberOf' + t);
    if (quantity[t] - 1 > 0) {
        quantity[t]--;
        nums.TotalItemsNumber--;
        itemNumber.innerHTML = nums.TotalItemsNumber;
        nums.TotalPrice -= adjustingThePrice(t);
        price.innerHTML = nums.TotalPrice + ",00 €"
        totalNumberOfItem.innerHTML = quantity[t];
        localStorage.setItem("quantity", JSON.stringify(quantity));
        localStorage.setItem("PricesAndNums", JSON.stringify(nums));
    }
}