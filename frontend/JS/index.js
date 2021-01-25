// variables //
let i = -1;
const itemNumber = document.getElementById("cartIndex");
const main = document.getElementById("Allcards");

//refreshing price //
let nums = localStorage.getItem("PricesAndNums");
refreshNums();

// DISCARDING EVERY CARDS 
GETIndex(main);