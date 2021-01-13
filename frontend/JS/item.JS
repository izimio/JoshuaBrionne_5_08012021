
// GETTING PRODUCT ID //
var id;
const ad = document.location.href //Obtiens l'id du produit
id = ad.substr(47,24);
// =============== //

// declaring variables //
let i = -1;
var p;
var d;
const Allcolors = document.createElement("select");
const Allbubble = document.createElement("div");
const main = document.getElementById('product');
let numberOfItemsInTheCard = 0;

// ======== //
        

    fetch("http://localhost:3000/api/teddies/" + id) //Rappel notre api + l'id de notre produit
    .then(async result_ => {  //Récupère le tableau json 
        const response = await result_.json() //Donne un nom au tableau json récupéré
        // reducing PRIZE //
        // =============== //
        // TRICKY CASES //
        while (++i < response.colors.length) {
            const option = document.createElement("option");             
            option.innerHTML = response.colors[i];
            Allcolors.appendChild(option);

            const bubble = document.createElement("div");
            bubble.style.backgroundColor = response.colors[i];
            if(response.colors[i] == "Pale brown")
                bubble.style.backgroundColor = "sandybrown";
            else if(response.colors[i] == "Dark brown")
                bubble.style.backgroundColor = "#654321";
            bubble.classList.add("overview_infos-allcolors-colors-bubble");
            Allbubble.appendChild(bubble);
            }
        // ============== //
        main.innerHTML = `<div class="tilte2">
                <h1>Découvrez ${response.name}</h1>
                    </div>
                    <section class="bg-color-deg">
                        <div class="overview">
                            <div class="overview_img">
                                <img src="${response.imageUrl}" alt="photo de ${response.name}">
                                <div class="overview_img-price">
                                    <h2>${response.price} € </h2>
                                </div>
                            </div>
                            <div class="overview_infos">
                                <div class="overview_infos-name text-center">
                                    <h2>${response.name}</h2>
                                </div>
                                <div class="overview_infos-description">
                                    <p> <b> description :</b> ${response.description}</p>
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

    const addToBasket = () =>{
        numberOfItemsInTheCard++;
        cartIndex.innerHTML = numberOfItemsInTheCard;
    }

    
    
