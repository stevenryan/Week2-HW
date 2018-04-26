var modal = document.getElementById("gusherModal");
var span = document.getElementsByClassName("close")[0];

setTimeout (function() {modal.style.display = "block";}, 3000);

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
