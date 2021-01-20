// variables //
const allCards = [
    document.getElementById('productCard1'),
    document.getElementById('productCard2'),
    document.getElementById('productCard3'),
    document.getElementById('productCard4'),
    document.getElementById('productCard5')
];
let i = -1;
const itemNumber = document.getElementById('cartIndex');
var tab = [];
// ================ //

//refreshing price //
let nums = localStorage.getItem("PricesAndNums");
refreshNums();
// ============= //

// DISCARDING EVERY CARDS 
while (allCards[++i]) {
    GET(i, allCards[i], tab);
}