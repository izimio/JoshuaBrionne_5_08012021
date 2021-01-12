// DIV HUGE FONDATIONS //
var divImg = document.createElement('div');
var divCaption = document.createElement('div');

divImg.classList.add('productCard_img');
divCaption.classList.add('productCard_caption');

// ==================== //


// DIV FONDATIONS //
var divUpper = document.createElement('div');
var divLower = document.createElement('div');

divUpper.classList.add('productCard_caption-upper');
divLower.classList.add('productCard_caption-lower');

// ==================== //

// DIV inside FONDATIONS //

var divUpper_name = document.createElement('div');
var divLower_price = document.createElement('div');
var divUpper_button = document.createElement('div');
var divLower_description = document.createElement('div');

divUpper_name.classList.add('productCard_caption-upper-name');
divLower_price.classList.add('productCard_caption-upper-price');
divUpper_button.classList.add('productCard_caption-upper-name-button');
divLower_description.classList.add('productCard_caption-lower-description');

// ==================== //

// INSIDE //

var img = document.createElement('img');
var h2 = document.createElement('h2');
var pPrice = document.createElement('p');
var pButton = document.createElement('p');
var pDescription = document.createElement('p');

h2.textContent = "oui";
divImg.appendChild('h2');

// ============== //


// add child to parents starting from the top//

card1.appendChild('divImg');
card1.appendChild('divCaption');