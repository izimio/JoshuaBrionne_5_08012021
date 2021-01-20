// Creating mains variables
const price = document.getElementById('allcost');
const itemNumber = document.getElementById('cartIndex');
var i = -1;
var j;
var t = 0;
var trigger = 0;

// getting all the infos we need about the post we made before 
var ResultId = localStorage.getItem("orderResult");
ResultId = JSON.parse(ResultId);
var OrderAll = localStorage.getItem("order");
OrderAll = JSON.parse(OrderAll);
var quantity = localStorage.getItem("quantity");
quantity = JSON.parse(quantity);

let nums = localStorage.getItem("PricesAndNums");

refreshNumsAndPrice();

console.log(OrderAll.products);
lol.innerHTML = OrderAll.products[0] + "___" + quantity[GetId(OrderAll.products[0])];


//  NE PAS OUBLEIR DE CLEAR LES LOCAL STORAGE //