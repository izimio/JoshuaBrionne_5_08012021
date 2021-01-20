const price = document.getElementById('allcost');
const itemNumber = document.getElementById('cartIndex');

let nums = localStorage.getItem("PricesAndNums");
if (nums) {
    nums = JSON.parse(nums);
    price.textContent = nums.TotalPrice + ",00 €"; // total price
    itemNumber.textContent = nums.TotalItemsNumber;
} else {
    price.textContent = "0,00 €"; // total price
    itemNumber.textContent = "0";
}

var t = localStorage.getItem("orderResult");
var p = localStorage.getItem("order");
t = JSON.parse(t);
p = JSON.parse(p);

console.log(p);
lol.innerHTML = t;
lol.innerHTML += p.contact.address;