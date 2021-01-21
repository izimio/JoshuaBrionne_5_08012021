// ========================== // FORMULAIRE // =========================== //
// var declaration and getting id //
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var city = document.getElementById("city");
var adress = document.getElementById("address");
var email = document.getElementById("mail");
var sumbut = document.getElementById("sumbutton");

// tab of error for each input //

var error = {
    in1: 0,
    in2: 0,
    in3: 0,
    in4: 0,
    in5: 0
};

// plenty of event listener to check the user's input and block the acess to the button "commander" if the input is wrong

firstName.addEventListener("input", function () {
    if (!userInputChecker(firstName.value, 1)) {
        firstName.classList.add("wrong"); // if it's wrong, adding a red background color 
        error1.textContent = "entrée invalide"; // write that the entry is not allowed 
        error.in1 = 0; // putting the error checker to 0 in order to block the final button 
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", ""); // if one of the checker's var are not equal to 1, blocking the button 
    } else {
        firstName.classList.remove("wrong"); // if the input fills inside the regex, removing the red background color 
        error1.textContent = ""; // erasing the error message
        error.in1 = 1; // putting the variable to 1 in order to unlock that input 
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1) // if everything is good, unlock the buttong 
            sumbut.removeAttribute("disabled", "");
    }

});

lastName.addEventListener("input", function () {
    if (!userInputChecker(lastName.value, 1)) {
        lastName.classList.add("wrong");
        error2.textContent = "entrée invalide";
        error.in2 = 0;
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", "");
    } else {
        lastName.classList.remove("wrong");
        error2.textContent = "";
        error.in2 = 1;
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1)
            sumbut.removeAttribute("disabled", "");
    }

});

city.addEventListener("input", function () {
    if (!userInputChecker(city.value, 1)) {
        city.classList.add("wrong");
        error3.textContent = "entrée invalide";
        error.in3 = 0;
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", "");
    } else {
        city.classList.remove("wrong");
        error3.textContent = "";
        error.in3 = 1;
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1)
            sumbut.removeAttribute("disabled", "");
    }

});

adress.addEventListener("input", function () {
    if (!userInputChecker(adress.value, 2)) {
        adress.classList.add("wrong");
        error4.textContent = "entrée invalide";
        error.in4 = 0;
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", "");
    } else {
        adress.classList.remove("wrong");
        error4.textContent = "";
        error.in4 = 1;
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1)
            sumbut.removeAttribute("disabled", "");

    }
});

email.addEventListener("input", function () {
    if (!userInputChecker(email.value, 3)) {
        email.classList.add("wrong");
        error5.textContent = "entrée invalide";
        error.in5 = 0;
        if (error.in1 != 1 || error.in2 != 1 || error.in3 != 1 || error.in4 != 1 || error.in5 != 1)
            sumbut.setAttribute("disabled", "");
    } else {
        email.classList.remove("wrong");
        error5.textContent = "";
        error.in5 = 1;
        if (error.in1 == 1 && error.in2 == 1 && error.in3 == 1 && error.in4 == 1 && error.in5 == 1)
            sumbut.removeAttribute("disabled", "");

    }
});

sumbut.addEventListener("click", function (Event) {
    var storage = localStorage.getItem("TabAllInfos");
    storage = JSON.parse(storage);
    var quantity = localStorage.getItem("quantity");
    quantity = JSON.parse(quantity);

    if (!storage.products[0]) { // if the basket is empty, cancelling the sumbit
        alert("Votre panier est vide");
        Event.preventDefault();
    } else { // else let's go for completing that order
        var tabId = [];
        let i = -1;
        var t = -1;
        let j;
        let trigger;
        while (++i < storage.products.length) {
            j = -1;
            trigger = 0;
            while (tabId[++j]) {
                if (tabId[j] == storage.products[i]._id)
                    trigger++;
            }
            if (trigger == 0)
                tabId.push(storage.products[i]._id)
        }
        console.log(tabId);
        var commande = {
            contact: { //contact object 
                firstName: firstName.value.trim(), //trim() to deleted some mistook spaces
                lastName: lastName.value.trim(),
                address: adress.value.trim(),
                city: city.value.trim(),
                email: email.value.trim(),
            },
            products: tabId, //all item's id 
        };
        POST(commande);
    }
});