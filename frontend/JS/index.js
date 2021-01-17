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
// ================ //

//refreshing price //

let nums = localStorage.getItem("PricesAndNums");
if (nums) {
    nums = JSON.parse(nums);
    itemNumber.innerHTML = nums.TotalItemsNumber;
} else {
    itemNumber.innerHTML = "0";
}

// ============= //

function GET(index, value) {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
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
                    </a>
                    <div class="productCard_caption-lower-addtocart">
                        <p id="teddy${index}" onclick="test()">Ajouter au panier</p>
                    </div>
                </div>`;
        }
    };
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
};
// DISCARDING EVERY CARDS 
while (allCards[++i]) {
    GET(i, allCards[i]);
}

function test(aEvent) {
    var g = aEvent ? aEvent : window.event;
    var ProductId = g.target.id;
    ProductId = ProductId.substr(5);
    parseInt(ProductId, 10);
    alert(ProductId);
}