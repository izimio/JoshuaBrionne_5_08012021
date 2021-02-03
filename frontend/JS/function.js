// ===== GLOBAL ===== //

function refreshNums() {
    if (nums) {
        nums = JSON.parse(nums);
        itemNumber.textContent = nums.TotalItemsNumber;
    } else {
        itemNumber.textContent = "0";
    }
}

function refreshNumsAndPrice() {
    if (nums) {
        nums = JSON.parse(nums);
        price.textContent = nums.TotalPrice + ",00 €"; // total price
        itemNumber.textContent = nums.TotalItemsNumber;
    } else {
        price.textContent = "0,00 €"; // total price
        itemNumber.textContent = "0";
    }
}
// +++++ GLOBAL +++++ //

// ===== POST ===== //
function POST(order) {
    fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(order), //stringifying the objet
    })
        .then(async result_ => {
            const result = await result_.json() //waiting for the result before saving things
            localStorage.setItem("orderResult", JSON.stringify(result.orderId)) //stocking the value inside 2 localstorages
            localStorage.setItem("order", JSON.stringify(order))
        })
        .catch(error => {
            console.error(error);
        })
    alert("Commande prise en compte. Merci de votre achat !")

}

// +++++ POST +++++ //

// ===== ITEM ===== //

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
    var storage = localStorage.getItem("TabAllInfos");
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
        index: GetId(id),
    })
    localStorage.setItem("TabAllInfos", JSON.stringify(storage)) // Putting the final result inside à stringify tab 
    alert(`L'ourson ${tabAll.name} à bien été ajouté à votre panier !`)
    addNumberAndPrice();

    var numberOfProduct = localStorage.getItem('TabAllPrice');
    numberOfProduct = JSON.parse(numberOfProduct);
    var quantity = localStorage.getItem("quantity");
    if (!quantity) {
        var quantity = [];
        var j = -1;
        while (++j < numberOfProduct.length) {
            quantity.push(0);
        }
    } else {
        quantity = JSON.parse(quantity)
    }
    // Getting the product's number
    var productId = GetId(id);
    // =========================== //
    quantity[productId]++;
    storage.products.index = productId;

    localStorage.setItem("TabAllInfos", JSON.stringify(storage))
    localStorage.setItem("quantity", JSON.stringify(quantity));

    let nums = localStorage.getItem("PricesAndNums");
    if (!nums) {
        itemNumber.textContent = "1";
        price.textContent = "0,00 €";
    } else {
        nums = JSON.parse(nums);
    }
    itemNumber.textContent = nums.TotalItemsNumber;
    localStorage.setItem("PricesAndNums", JSON.stringify(nums));
}

// +++++ ITEM +++++ //


// ===== FORMULAIRE ===== //

// fonction wich tells if the parameter fills in the regex //
function userInputChecker(userInput, value) {
    if (value == 1) {
        if (!userInput.match(/^[A-Za-zéèçüîïûëê-\s]{2,30}$/)) // first regex for firstname and last name 
            return (0);
        else
            return (1);
    } else if (value == 2) {
        if (!userInput.match(/^[A-Za-z0-9éèçüîï'ûëê-\s]{2,30}$/)) // Second regex for adress and city 
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
// +++++ FORMULAIRE +++++ //

// ===== SHOPPINGCART ===== //

// == UPPOER BASKET == //

// Getting with a product's ID his reference
function GetId(value) {
    if (value.length != 24) {
        console.error("erreur d'ID");
    }
    else {
        var productId = value.substr(23);
        parseInt(productId, 10);
        productId -= 3
        return (productId);
    }
}

// function to block the repetition of the same object //
function antiRep(value) {
    var ProductId = GetId(value);
    antiRepeat[ProductId]++;
    return (ProductId);
}

// showing the quantity of an item 
function checkQuantity(index) {
    var numberOfX = document.getElementById('numberOf' + index);
    numberOfX.textContent = quantity[index];
}

// ajusting the price depending on the "+" & the "-"

function adjustingThePrice(value) {
    var tabPrice = localStorage.getItem("TabAllPrice");
    tabPrice = JSON.parse(tabPrice);
    console.log(tabPrice[value]);
    return tabPrice[value];
}
// ++ UPPOER BASKET ++ //

// == LOWER BASKET == //

// function to delete an item from the basket //
function deletingElement(aEvent) {
    var g = aEvent ? aEvent : window.event;
    var ProductId = g.target.id;
    ProductId = ProductId.substr(5); //getting the product's id from the id by substring it
    parseInt(ProductId, 10); // parsing with an atoi the product in order to transform him into a int var
    let i = -1;
    while (++i < storage.products.length) {
        if (storage.products[i].index == ProductId) {
            storage.products.splice(i, 1); //if we find the id throught the whole object STORAGE // 
            i = -1;
        }
    }
    // adjusting the nums //
    nums.TotalItemsNumber -= (quantity[ProductId])
    itemNumber.textContent = nums.TotalItemsNumber;
    nums.TotalPrice -= (quantity[ProductId] * adjustingThePrice(ProductId));
    price.textContent = nums.TotalPrice + ",00 €"

    quantity[ProductId] = 0;
    localStorage.setItem("quantity", JSON.stringify(quantity));
    localStorage.setItem("TabAllInfos", JSON.stringify(storage));
    localStorage.setItem("PricesAndNums", JSON.stringify(nums));

    if (!storage.products[0]) { //Ajusting the text with the storage
        impatient.textContent = "Votre ourson à hâte de vous rencontrer"
    }
    location.reload(); // reloading to show the new basket
}


// functions that's refreshing the nums's value in case of a "+" or "-"
function modifyValuePlus(aEvent) {
    var e = aEvent ? aEvent : window.event;
    var t = e.target.id;
    t = t.substring(4);
    t = parseInt(t, 10);

    var totalNumberOfItem = document.getElementById('numberOf' + t);
    quantity[t]++;
    nums.TotalItemsNumber++;
    itemNumber.textContent = nums.TotalItemsNumber;
    nums.TotalPrice += adjustingThePrice(t);
    price.textContent = nums.TotalPrice + ",00 €"
    totalNumberOfItem.textContent = quantity[t];

    localStorage.setItem("quantity", JSON.stringify(quantity));
    localStorage.setItem("PricesAndNums", JSON.stringify(nums));
}

function modifyValueMinus(aEvent) {
    var e = aEvent ? aEvent : window.event;
    var t = e.target.id;
    t = t.substring(4);
    t = parseInt(t, 10);

    var totalNumberOfItem = document.getElementById('numberOf' + t);
    if (quantity[t] - 1 > 0) {
        quantity[t]--;
        nums.TotalItemsNumber--;
        itemNumber.textContent = nums.TotalItemsNumber;
        nums.TotalPrice -= adjustingThePrice(t);
        price.textContent = nums.TotalPrice + ",00 €"
        totalNumberOfItem.textContent = quantity[t];

        localStorage.setItem("quantity", JSON.stringify(quantity));
        localStorage.setItem("PricesAndNums", JSON.stringify(nums));
    }
}
// ++ LOWER BASKET ++ //

// +++++ SHOPPINGCART +++++ //

// ===== CONFIRMP ===== //
function eraseLocalStorage() {
    localStorage.removeItem("PricesAndNums")
    localStorage.removeItem("quantity")
    localStorage.removeItem("TabAllInfos")
}

// +++++ CONFIRMP +++++ //