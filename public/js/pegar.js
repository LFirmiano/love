var capturando = "";
var data = "21/09/2019";

function capturar() {
    capturando = document.getElementById('data').value;
    if (capturando == data) {
        window.location.href = "love.html";
    } else {
        window.location.href = "#";
    }   
}