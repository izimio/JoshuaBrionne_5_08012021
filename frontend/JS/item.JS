// GETTING PAGE ID //
var str = document.location.href;

let p = -1;
var id = "";

while(str[p] != "=")
    p++;
while(str[++p] != '.'){
    id += str[p]
}
    console.log(id);
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
refreshNums();
// ============= //

// MAIN PROG // 
fetch("http://localhost:3000/api/teddies/" + id) //recall our API with the ID
    .then(async result_ => { //GET the stringify tab
        const response = await result_.json() //give a ame to that tab
        tabAll = response; // getting the api's information inside my own variable

        // TRICKY CASES //
        while (++i < response.colors.length) {
            const option = document.createElement("option"); // creating the select filled with every color
            option.textContent = response.colors[i];
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
                                    <p> <b> Description :</b> ${tabAll.description}</p>
                                </div>
                                <div class="overview_infos-materiaux">
                                    <h2>Matériaux</h2>
                                    <ul>
                                        <li>Laine de mouton</li>
                                        <li>Coton biologique éco-responsable</li>
                                        <li>Billes en verre</li>
                                        <li>Fil de lin</li>
                                        <li>Teinture aux pigments végétaux</li>
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
    