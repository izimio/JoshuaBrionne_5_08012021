const ouin = document.getElementById('allcost');
const ko = document.getElementById('allProductsName');
let oui = 1;
ouin.innerHTML = oui;
ouin.addEventListener('click',function() {

    oui *= 2;
    ouin.innerHTML = "&nbsp " + oui + "€";

});
