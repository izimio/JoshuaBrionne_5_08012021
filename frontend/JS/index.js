const op = document.getElementById('des1');

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

GETdescription(1,op);