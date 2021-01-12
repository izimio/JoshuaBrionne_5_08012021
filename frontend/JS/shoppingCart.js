const ouin = document.getElementById('allcost');

let oui = 1;
ouin.innerHTML = oui + "€";
ouin.addEventListener('click', function () {

    oui *= 2;
    ouin.innerHTML = "&nbsp " + oui + "€";

});

// ========================== // FORMULAIRE // =========================== //

var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var city = document.getElementById('city');
var adress = document.getElementById('address');
var email = document.getElementById('mail');
var sumbut = document.getElementById('sumbutton');

var p = document.createElement('p');
p.classList.add('error');
p.textContent = "entrée invalide";

let error = {
    in1: 0,
    in2: 0,
    in3: 0,
    in4: 0,
    in5: 0
};

function userInputChecker(userInput, value) {

    if (value == 1) {
        if (!userInput.match(/^([a-zA-Z-'éèç ]+)$/))
            return (0);
        else
            return (1);
    } else if (value == 2) {
        if (!userInput.match(/^([a-zA-Z-0-9éèç ]+)$/))
            return (0);
        else
            return (1);
    } else if (value == 3) {
        if (!userInput.match(/^[a-z0-9._-ç]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/))
            return (0);
        else
            return (1);
    }
}

firstName.addEventListener('input', function () {
    if (!userInputChecker(firstName.value, 1)) {
        firstName.classList.add('wrong');
        fName.appendChild(p);
        error.in1 = 0;
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", "");
    } else {
        firstName.classList.remove('wrong');
        fName.removeChild(p);
        error.in1 = 1;
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1)
            sumbut.removeAttribute("disabled", "");
    }

});

lastName.addEventListener('input', function () {
    if (!userInputChecker(lastName.value, 1)) {
        lastName.classList.add('wrong');
        fLast.appendChild(p);
        error.in2 = 0;
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", "");
    } else {
        lastName.classList.remove('wrong');
        fLast.removeChild(p);
        error.in2 = 1;
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1)
            sumbut.removeAttribute("disabled", "");
    }

});

city.addEventListener('input', function () {
    if (!userInputChecker(city.value, 1)) {
        city.classList.add('wrong');
        fCity.appendChild(p);
        error.in3 = 0;
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", "");
    } else {
        city.classList.remove('wrong');
        fCity.removeChild(p);
        error.in3 = 1;
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1)
            sumbut.removeAttribute("disabled", "");
    }

});

adress.addEventListener('input', function () {
    if (!userInputChecker(adress.value, 2)) {
        adress.classList.add('wrong');
        fAdress.appendChild(p);
        error.in4 = 0;
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", "");
    } else {
        adress.classList.remove('wrong');
        fAdress.removeChild(p);
        error.in4 = 1;
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1)
            sumbut.removeAttribute("disabled", "");

    }
});

email.addEventListener('input', function () {
    if (!userInputChecker(email.value, 3)) {
        email.classList.add('wrong');
        fEmail.appendChild(p);
        error.in5 = 0;
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", "");
    } else {
        email.classList.remove('wrong');
        fEmail.removeChild(p);
        error.in5 = 1;
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1)
            sumbut.removeAttribute("disabled", "");

    }
});

sumbut.addEventListener('click', function (event) {

});