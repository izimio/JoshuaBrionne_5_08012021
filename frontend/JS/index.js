const ouin = document.getElementById('allcost');

let oui = 0;
ouin.innerHTML = oui;
ouin.addEventListener('click',function() {

    oui++;
    ouin.innerHTML = "&nbsp " + oui + "€";

});