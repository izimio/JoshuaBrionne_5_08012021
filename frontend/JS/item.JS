// GETTING PAGE ID //
var id;
const ad = document.location.href //Obtiens l'id du produit
id = ad.substr(47, 24);
// =============== //

// declaring variables //
let i = -1;
const Allcolors = document.createElement("select");
const Allbubble = document.createElement("div");
const main = document.getElementById('product');
var tabAll;
const itemNumber = document.getElementById('cartIndex');
// ======== //

// SETTING NUMS //
let nums = localStorage.getItem("PricesAndNums");
if (nums) {
    nums = JSON.parse(nums);
    itemNumber.innerHTML = nums.TotalItemsNumber;
} else {
    itemNumber.innerHTML = "0";
}
// ============= //

// MAIN PROG // 

fetch("http://localhost:3000/api/teddies/" + id) //recall our API with the ID
    .then(async result_ => { //GET the stringify tab
        const response = await result_.json() //give a ame to that tab
        tabAll = response; // getting the api's information inside my own variable

        // TRICKY CASES //
        while (++i < response.colors.length) {
            const option = document.createElement("option"); // creating the select filled with every color
            option.innerHTML = response.colors[i];
            Allcolors.appendChild(option);

            const bubble = document.createElement("div"); // creatings the colored bubbles 
            bubble.style.backgroundColor = response.colors[i];
            if (response.colors[i] == "Pale brown")
                bubble.style.backgroundColor = "sandybrown";
            else if (response.colors[i] == "Dark brown")
                bubble.style.backgroundColor = "#654321";
            bubble.classList.add("overview_infos-allcolors-colors-bubble");
            Allbubble.appendChild(bubble);
        }
        // ============== //

        main.innerHTML = `<div class="tilte2">
                <h1>Découvrez ${tabAll.name}</h1>
                    </div>
                    <section class="bg-color-deg">
                        <div class="overview">
                            <div class="overview_img">
                                <img src="${tabAll.imageUrl}" alt="photo de ${tabAll.name}">
                                <div class="overview_img-price">
                                    <h2>${tabAll.price / 100},00 € </h2>
                                </div>
                            </div>
                            <div class="overview_infos">
                                <div class="overview_infos-name text-center">
                                    <h2>${tabAll.name}</h2>
                                </div>
                                <div class="overview_infos-description">
                                    <p> <b> description :</b> ${tabAll.description}</p>
                                </div>
                                <div class="overview_infos-materiaux">
                                    <h2>Matériaux</h2>
                                    <ul>
                                        <li>Laine de mouton</li>
                                        <li>Coton biologique éco-responsable</li>
                                        <li>Billes en verres</li>
                                        <li>Fil de lin</li>
                                        <li>Teinture aux pigments végétales</li>
                                    </ul>
                                </div>
                                <div class="overview_infos-allcolors">
                                    <div class="overview_infos-allcolors">
                                        <h2>Les différents coloris : </h2>
                                    </div>
                                    <div class="overview_infos-allcolors-colors">
                                    ${Allbubble.innerHTML}
                                    </div>
                                    <div class="overview_infos-allcolors-form">
                                        <form>
                                            <label for="colorForm">Choissisez un coloris</label>
                                            <SELECT name="colorSelection" size="1" id="colorForm">
                                            ${Allcolors.innerHTML}
                                            </SELECT>
                                        </form>
                                    </div>
                                </div>
                                <div class="overview_infos-addcart">
                                     <div id="addcartee" class="overview_infos-addcart-button" onclick="addToBasket()">
                                         <i class="fas fa-cart-plus"></i>
                                        <p>Ajouter au panier</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>`;
    })
    .catch((error) => {
        console.log(error);
    })

// adding the product's value to the total price and also ++ the itemNumber
function addNumberAndPrice() {
    let nums = localStorage.getItem("PricesAndNums");
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

function addToBasket() {
    // CREATING THE BASQUT STORAGE //
    let storage = localStorage.getItem("TabAllInfos");
    if (!storage) { //if doesn't exist, creating, else just fill it 
        storage = {
            products: [],
        }
    } else {
        storage = JSON.parse(storage) //extracting JSON
    }
    storage.products.push({
        name: tabAll.name,
        _id: tabAll._id,
        price: tabAll.price / 100,
        description: tabAll.description,
        imageUrl: tabAll.imageUrl,
        index: (parseInt(id.substr(23)) - 3),
    })
    localStorage.setItem("TabAllInfos", JSON.stringify(storage)) // Putting the final result inside à stringify tab 
    alert(`L'ourson ${tabAll.name} à bien été ajouté à votre panier !`)
    addNumberAndPrice();


    var quantity = localStorage.getItem("quantity");
    if (!quantity) {
        var quantity = [
            0,
            0,
            0,
            0,
            0
        ];
    } else {
        quantity = JSON.parse(quantity)
    }
    if (id == "5be9c8541c9d440000665243") {
        quantity[0]++;
        storage.products.index = 0;
    } else if (id == "5beaa8bf1c9d440000a57d94") {
        quantity[1]++;
        storage.products.index = 1;
    } else if (id == "5beaaa8f1c9d440000a57d95") {
        quantity[2]++;
        storage.products.index = 2;
    } else if (id == "5beaabe91c9d440000a57d96") {
        quantity[3]++;
        storage.products.index = 3;
    } else if (id == "5beaacd41c9d440000a57d97") {
        quantity[4]++;
        storage.products.index = 4;
    }

    localStorage.setItem("TabAllInfos", JSON.stringify(storage))
    localStorage.setItem("quantity", JSON.stringify(quantity));

    let nums = localStorage.getItem("PricesAndNums");
    if (!nums) {
        itemNumber.innerHTML = "1";
        price.innerHTML = "0,00 €";
    } else {
        nums = JSON.parse(nums);
    }
    itemNumber.innerHTML = nums.TotalItemsNumber;
    localStorage.setItem("PricesAndNums", JSON.stringify(nums));
}