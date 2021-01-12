
const params = (new URL(document.location)).searchParams;
const id = params.get('id'); 

const allItems = [
    document.getElementById('product1'),
    document.getElementById('productCard2'),
    document.getElementById('productCard3'),
    document.getElementById('productCard4'),
    document.getElementById('productCard5')
];


function GETproduct(index, value) {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            value.innerHTML = `<div class="tilte2">
            <h1>Découvrez Norbert</h1>
                </div>
                <section class="bg-color-deg">
                    <div class="overview">
                        <div class="overview_img">
                            <img src="../../backend/images/teddy_1.jpg" alt="Norbert">
                            <div class="overview_img-price">
                                <h2>29,00 €</h2>
                            </div>
                        </div>
                        <div class="overview_infos">
                            <div class="overview_infos-name text-center">
                                <h2>Norbert</h2>
                            </div>
                            <div class="overview_infos-description">
                                <p> <b> description : </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                                            <option value="Bronze" selected>Bronze</option>
                                            <option value="Chocolat">Chocolat</option>
                                            <option value="Noir">Noir</option>
                                            <option value="Marron clair">Marron clair</option>
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
        }
    };
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
};

GETproduct(1, allItems[0]);