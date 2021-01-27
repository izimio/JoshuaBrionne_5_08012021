// variables //
let i = -1;
const itemNumber = document.getElementById("cartIndex");
const main = document.getElementById("Allcards");

//refreshing price //
let nums = localStorage.getItem("PricesAndNums");
refreshNums();

// DISCARDING EVERY CARDS 
fetch("http://localhost:3000/api/teddies/")
    .then(async result_ => { //GET the stringify tab
        const response = await result_.json() //give a ame to that tab
        tabAll = response; // getting the api's information inside my own variable
        var index = -1;

        // creating the price's tab
        const allAPI = localStorage.getItem("TabAllPrice");
        if (!allAPI) {
            var tab = [];
            while (response[++index]) {
                tab.push(tabAll[index].price / 100)
            }
            localStorage.setItem("TabAllPrice", JSON.stringify(tab))
        }
        index = -1;
        while (response[++index]) {
            main.innerHTML += `
        <div class="col-lg-4 col-sm-12 ">
            <div class="productCard" id="productCard${index}">
                <a href="../html/product_id=${tabAll[index]._id}.html">
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
                    <div class="productCard_caption-lower-addtocart">
                        <p id="teddy${index}">En savoir plus</p>
                    </div>
                </div>
                </a>
            </div>
        </div>`;
        }
    })
    .catch((error) => {
        console.error(error);
    })