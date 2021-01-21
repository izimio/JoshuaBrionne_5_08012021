// CREATINGS mains VARIABLE //
const main = document.getElementById("recapAll");
const price = document.getElementById("allcost");
const itemNumber = document.getElementById("cartIndex");
var empty = document.getElementById("emptyBasket");
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

var quantity = localStorage.getItem("quantity");
quantity = JSON.parse(quantity);


//  REFRESHING THE nums'S VALUE//
let nums = localStorage.getItem("PricesAndNums");
refreshNumsAndPrice();
// =========================== // 

// OPENING AND GETTING READY TO SHOW THE BASKET // 

var storage = localStorage.getItem("TabAllInfos");
if(!storage){
    empty.textContent = "Votre panier est vide";
}
storage = JSON.parse(storage);
if (!storage.products[0]) {
    empty.textContent = "Votre panier est vide";
} else {
    main.textContent = "";
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
    crossinfo.textContent = "supprimer l'article";
});
crossDiv.addEventListener('mouseout', function () {
    var crossinfo = document.getElementById('crossInfo')
    crossinfo.textContent = "";

});
// ================================ //
