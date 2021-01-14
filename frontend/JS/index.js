const allCards = [
    document.getElementById('productCard1'),
    document.getElementById('productCard2'),
    document.getElementById('productCard3'),
    document.getElementById('productCard4'),
    document.getElementById('productCard5')
];
let i = -1;
const itemNumber = document.getElementById('cartIndex');


let nums = localStorage.getItem("PricesAndNums");
if (nums) {
    nums = JSON.parse(nums);
    itemNumber.innerHTML = nums.TotalItemsNumber;
}
else{
    itemNumber.innerHTML = "0";
}

function GET(index, value) {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var tabAll = response;
            value.innerHTML = `<a href="../html/product_id=${tabAll[index]._id}.html">
                <div class="productCard_img">
                    <img src="${tabAll[index].imageUrl}" alt="photo de ${tabAll[index].name}">
                </div>
                <div class="productCard_caption">
                    <div class="productCard_caption-upper">
                        <div class="productCard_caption-upper-name">
                            <h2>${tabAll[index].name}</h2>
                        </div>
                        <div class="productCard_caption-upper-price">
                            <p>${tabAll[index].price / 100},00 €</p>
                        </div>
                    </div>
                    <div class="productCard_caption-lower">
                        <p class="productCard_caption-lower-description">${tabAll[index].description}</p>
                    </div>
                        <div class="productCard_caption-lower-addtocart" onclick="">
                            <span>En savoir plus</span>
                            <i class="fas fa-cart-plus"></i>
                        </div>
                </div>
            </a>`;
        }
    };
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
};

while (allCards[++i]) {
    GET(i, allCards[i]);
}

const addToBasket = () => {

    alert(tabAll.price)

    let nums = localStorage.getItem("PricesAndNums")
    if (!nums) {
        nums = {
            TotalPrice: 0,
            TotalItemsNumber: 0
        }
    } else {
        nums = JSON.parse(nums);
    }
    nums.TotalPrice += tabAll.price / 100;
    nums.TotalItemsNumber += 1;

    localStorage.setItem("PricesAndNums", JSON.stringify(nums));
}