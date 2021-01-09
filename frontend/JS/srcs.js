function GETcolor(index, index2, value){
    
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            value.innerHTML = response[index].colors[index2];
        }
    };
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
};

function GETid(index, value){
    
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            value.innerHTML = response[index]._id;
        }
    };
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
};

function GETname(index, value){
    
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            value.innerHTML = response[index].name;
        }
    };
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
};

function GETprice(index, value){
    
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            value.innerHTML = response[index].price;
        }
    };
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
};

function GETimg(index, value){
    
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            value.innerHTML = response[index].imageUrl;
        }
    };
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
};


function GETdescription(index, value){
    
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            value.innerHTML = response[index].description;
        }
    };
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
};