const price = document.getElementById('allcost');
const itemNumber = document.getElementById('cartIndex');

let nums = localStorage.getItem("PricesAndNums");
if (nums) {
    nums = JSON.parse(nums);
    price.innerHTML = nums.TotalPrice + ",00 €"; // total price
    itemNumber.innerHTML = nums.TotalItemsNumber;
} else {
    price.innerHTML = "0,00 €"; // total price
    itemNumber.innerHTML = "0";
}