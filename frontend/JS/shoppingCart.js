// CREATINGS mains VARIABLE //
const main = document.getElementById("recapAll");
const price = document.getElementById("allcost");
const itemNumber = document.getElementById("cartIndex");
var empty = document.getElementById("emptyBasket");
var impatient = document.getElementById("impatient");
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
var nums = localStorage.getItem("PricesAndNums");
refreshNumsAndPrice();
// =========================== // 

// OPENING AND GETTING READY TO SHOW THE BASKET // 

var storage = localStorage.getItem("TabAllInfos");
if(!storage){
    empty.textContent = "Votre panier est vide";
}
storage = JSON.parse(storage);

// Adjusting the text with the teddies's number
if(storage.products[1]){
    impatient.textContent = "Vos oursons ont hâte de vous rencontrer";
}
else{
    impatient.textContent = "Votre ourson a hâte de vous rencontrer";
}
if (!storage.products[0]) {
    empty.textContent = "Votre panier est vide";
    impatient.textContent = "";
} else {
    main.textContent = "";
    while (++i != storage.products.length) {
        index = antiRep(storage.products[i]._id); // BLOCKING THE REPETITION OF ARTICLES //           
        if (antiRepeat[index] <= 1 && storage.products[i]) {
            main.innerHTML +=
                `<div class="recapitulatif_all_each" id="recap${storage.products[i].index}">
                        <div class="recapitulatif_all_each-image">
                            <img src="${storage.products[i].imageUrl}" alt="photo de ${storage.products[i].name}">
                        </div>
                        <div class="recapitulatif_all_each-infos">
                            <div class="recapitulatif_all_each-infos-left">
                                <h3>${storage.products[i].name}</h3>
                                <p>${storage.products[i].description}</p>
                                <div class="recapitulatif_all_each-infos-left-tab">
                                    <div class="recapitulatif_all_each-infos-left-tab-minus">
                                        <p onclick="modifyValueMinus()" id="minu${storage.products[i].index}">-</p>
                                    </div>
                                    <div class="recapitulatif_all_each-infos-left-tab-select">
                                        <p id="numberOf${storage.products[i].index}"> </p>
                                    </div>
                                    <div class="recapitulatif_all_each-infos-left-tab-plus">
                                        <p id="plus${storage.products[i].index}" onclick="modifyValuePlus()">+</p>
                                    </div>
                                </div>
                            </div>
                            <div class="recapitulatif_all_each-infos-right">
                                <div class="recapitulatif_all_each-infos-right-cross" id="crossDiv">
                                    <i class="far fa-trash-alt" id="cross${storage.products[i].index}" onclick="deletingElement()"></i>

                                </div>
                                <div class="recapitulatif_all_each-infos-right-price">
                                    <p>${storage.products[i].price},00 €</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }
        checkQuantity(index);
    }
}
