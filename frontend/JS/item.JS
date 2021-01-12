
// GETTING PRODUCT ID //
const ad = document.location.href //Obtiens l'id du produit
var id;
id = ad.substr(47,24);
// =============== //

// declaring variables //
let i = -1;
const Allcolors = document.createElement("select");

const main = document.getElementById('product');
// ======== //
        

    fetch("http://localhost:3000/api/teddies/" + id) //Rappel notre api + l'id de notre produit
    .then(async result_ => {  //Récupère le tableau json 
        const response = await result_.json() //Donne un nom au tableau json récupéré
        while (++i < response.colors.length) {
            const option = document.createElement("option");             
            option.innerHTML = response.colors[i];
            Allcolors.appendChild(option);
            }
        main.innerHTML = `<div class="tilte2">
                <h1>Découvrez ${response.name}</h1>
                    </div>
                    <section class="bg-color-deg">
                        <div class="overview">
                            <div class="overview_img">
                                <img src="${response.imageUrl}" alt="photo de ${response.name}">
                                <div class="overview_img-price">
                                    <h2>${response.price}</h2>
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
                                        <div class="overview_infos-allcolors-colors-bubble">

                                        </div>
                                        <div class="overview_infos-allcolors-colors-bubble">
                                        </div>
                                        <div class="overview_infos-allcolors-colors-bubble">

                                        </div>
                                        <div class="overview_infos-allcolors-colors-bubble">

                                        </div>
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
                                    <a href="">
                                        <div class="overview_infos-addcart-button">
                                            <i class="fas fa-cart-plus"></i>
                                            <p>Ajouter au panier</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>`;
    })
    .catch((error) => {
        console.log(error);
    })
