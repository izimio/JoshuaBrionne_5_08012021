//localStorage.clear();
// FUNCTIONS //
function antiRep(value) {
    if (value == "5be9c8541c9d440000665243") {
        antiRepeat[0]++;
        return (0);
    } else if (value == "5beaa8bf1c9d440000a57d94") {
        antiRepeat[1]++;
        return (1);
    } else if (value == "5beaaa8f1c9d440000a57d95") {
        antiRepeat[2]++;
        return (2);
    } else if (value == "5beaabe91c9d440000a57d96") {
        antiRepeat[3]++;
        return (3);
    } else if (value == "5beaacd41c9d440000a57d97") {
        antiRepeat[4]++;
        return (4);
    }
}

function GetId(value) {
    if (value == "5be9c8541c9d440000665243") {
        return (0);
    } else if (value == "5beaa8bf1c9d440000a57d94") {
        return (1);
    } else if (value == "5beaaa8f1c9d440000a57d95") {
        return (2);
    } else if (value == "5beaabe91c9d440000a57d96") {
        return (3);
    } else if (value == "5beaacd41c9d440000a57d97") {
        return (4);
    }
}

function checkQuantity(index) {
    if (index == 0) {
        numberOf0.innerHTML = antiRepeat[0];
    } else if (index == 1) {
        numberOf1.innerHTML = antiRepeat[1];
    } else if (index == 2) {
        numberOf2.innerHTML = antiRepeat[2];
    } else if (index == 3) {
        numberOf3.innerHTML = antiRepeat[3];
    } else if (index == 4) {
        numberOf4.innerHTML = antiRepeat[4];
    }
}
// ================= //


// CREATINGS VARIABLE //
const main = document.getElementById('recapAll');
const price = document.getElementById('allcost');
const itemNumber = document.getElementById('cartIndex');
let i = -1;
var index;
var p = -1;
var antiRepeat = [
    0,
    0,
    0,
    0,
    0
];
// CREATING THE TAB //

var t = -1;
var select = document.createElement('select');

//  REFRESHING THE ITEMS'S VALUE//
let nums = localStorage.getItem("PricesAndNums");
if (!nums) {
    itemNumber.innerHTML = "0";
    price.innerHTML = "0,00 €";
}
nums = JSON.parse(nums);
price.innerHTML = nums.TotalPrice + ",00 €"; // total price
itemNumber.innerHTML = nums.TotalItemsNumber;

// OPENING AND GETTING READY TO SHOW THE BASQUET // 

var storage = localStorage.getItem("TabAllInfos");
storage = JSON.parse(storage);

if (!storage) {

} else {
    let products = storage.products;
    main.innerHTML = "";
    while (++i != storage.products.length) {
        index = antiRep(storage.products[i]._id); // BLOCKING THE REPETITION OF ARTICLES //           
        if (antiRepeat[index] <= 1) {
            p++;
            main.innerHTML +=
                `<div class="recapitulatif_all_each" id="recap${GetId(storage.products[i]._id)}">
                        <div class="recapitulatif_all_each-image">
                            <img src="${storage.products[i].imageUrl}" alt="photo de ${storage.products[i].name}">
                        </div>
                        <div class="recapitulatif_all_each-infos">
                            <div class="recapitulatif_all_each-infos-left">
                                <h3>${storage.products[i].name}</h3>
                                <p>${storage.products[i].description}</p>
                                <div class="recapitulatif_all_each-infos-left-tab">
                                    <div class="recapitulatif_all_each-infos-left-tab-minus">
                                        <p onclick="modifyValueMinus()" id="minu${GetId(storage.products[i]._id)}">-</p>
                                    </div>
                                    <div class="recapitulatif_all_each-infos-left-tab-select">
                                        <p id="numberOf${GetId(storage.products[i]._id)}"> </p>
                                    </div>
                                    <div class="recapitulatif_all_each-infos-left-tab-plus">
                                        <p id="plus${GetId(storage.products[i]._id)}" onclick="modifyValuePlus()">+</p>
                                    </div>
                                </div>
                            </div>
                            <div class="recapitulatif_all_each-infos-right">
                                <div class="recapitulatif_all_each-infos-right-cross">
                                    <i onclick="DeleteItem()" class="fas fa-times"></i>
                                </div>
                                <div class="recapitulatif_all_each-infos-right-price">
                                    <p>${storage.products[i].price},00 €</p>
                                </div>
                            </div>
                        </div>
                    </div>`
        }
        checkQuantity(index);
    }
}

function modifyValuePlus(aEvent) {
    var e = aEvent ? aEvent : window.event;
    var t = e.target.id;
    t = t.substring(4);
    t = parseInt(t, 10);
    antiRepeat[t]++;
    if (numberOf0)
        numberOf0.innerHTML = antiRepeat[0];
    else if (numberOf1)
        numberOf1.innerHTML = antiRepeat[1];
    else if (numberOf2)
        numberOf2.innerHTML = antiRepeat[2];
    else if (numberOf3)
        numberOf3.innerHTML = antiRepeat[3];
    else if (numberOf4)
        numberOf4.innerHTML = antiRepeat[4];
}

function modifyValueMinus(aEvent) {
    var e = aEvent ? aEvent : window.event;
    var t = e.target.id;
    t = t.substring(4);
    t = parseInt(t, 10);
    antiRepeat[t]--;
    if (numberOf0)
        numberOf0.innerHTML = antiRepeat[0];
    else if (numberOf1)
        numberOf1.innerHTML = antiRepeat[1];
    else if (numberOf2)
        numberOf2.innerHTML = antiRepeat[2];
    else if (numberOf3)
        numberOf3.innerHTML = antiRepeat[3];
    else if (numberOf4)
        numberOf4.innerHTML = antiRepeat[4];
}

function DeleteItem() {
    alert('oui');
}









// ========================== // FORMULAIRE // =========================== //

// var declaration and getting id //
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var city = document.getElementById('city');
var adress = document.getElementById('address');
var email = document.getElementById('mail');
var sumbut = document.getElementById('sumbutton');

// tab of error for each input //

let error = {
    in1: 0,
    in2: 0,
    in3: 0,
    in4: 0,
    in5: 0
};


// fonction wich tells if the parameter fills in the regex //
function userInputChecker(userInput, value) {

    if (value == 1) {
        if (!userInput.match(/^([a-zA-Z-'éèç ]+)$/)) // first regex for firstname and last name 
            return (0);
        else
            return (1);
    } else if (value == 2) {
        if (!userInput.match(/^([a-zA-Z-0-9éèç ]+)$/)) // Second regex for adress and city 
            return (0);
        else
            return (1);
    } else if (value == 3) {
        if (!userInput.match(/^[a-z0-9._-ç]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)) // thrid regex for the email adress
            return (0);
        else
            return (1);
    }
}

// plenty of event listener to check the user's input and block the acess to the button "commander" if the input is wrong

firstName.addEventListener('input', function () {
    if (!userInputChecker(firstName.value, 1)) {
        firstName.classList.add('wrong'); // if it's wrong, adding a red background color 
        error1.innerHTML = "&nbsp &nbsp entrée invalide"; // write that the entry is not allowed 
        error.in1 = 0; // putting the error checker to 0 in order to block the final button 
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", ""); // if one of the checker's var are not equal to 1, blocking the button 
    } else {
        firstName.classList.remove('wrong'); // if the input fills inside the regex, removing the red background color 
        error1.innerHTML = ""; // erasing the error message
        error.in1 = 1; // putting the variable to 1 in order to unlock that input 
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1) // if everything is good, unlock the buttong 
            sumbut.removeAttribute("disabled", "");
    }

});

lastName.addEventListener('input', function () {
    if (!userInputChecker(lastName.value, 1)) {
        lastName.classList.add('wrong');
        error2.innerHTML = "&nbsp &nbsp entrée invalide";
        error.in2 = 0;
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", "");
    } else {
        lastName.classList.remove('wrong');
        error2.innerHTML = "";
        error.in2 = 1;
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1)
            sumbut.removeAttribute("disabled", "");
    }

});

city.addEventListener('input', function () {
    if (!userInputChecker(city.value, 1)) {
        city.classList.add('wrong');
        error3.innerHTML = "&nbsp &nbsp entrée invalide";
        error.in3 = 0;
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", "");
    } else {
        city.classList.remove('wrong');
        error3.innerHTML = "";
        error.in3 = 1;
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1)
            sumbut.removeAttribute("disabled", "");
    }

});

adress.addEventListener('input', function () {
    if (!userInputChecker(adress.value, 2)) {
        adress.classList.add('wrong');
        error4.innerHTML = "&nbsp &nbsp entrée invalide";
        error.in4 = 0;
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", "");
    } else {
        adress.classList.remove('wrong');
        error4.innerHTML = "";
        error.in4 = 1;
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1)
            sumbut.removeAttribute("disabled", "");

    }
});

email.addEventListener('change', function () {
    if (!userInputChecker(email.value, 3)) {
        email.classList.add('wrong');
        error5.innerHTML = "&nbsp &nbsp entrée invalide";
        error.in5 = 0;
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", "");
    } else {
        email.classList.remove('wrong');
        error5.innerHTML = "";
        error.in5 = 1;
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1)
            sumbut.removeAttribute("disabled", "");

    }
});

sumbut.addEventListener('click', function (event) {

});