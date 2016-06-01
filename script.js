var elt = document.getElementById("main-page-link");

elt.onclick = function(){
    alert("Работает");
    this.style.color="red";
}

function changeColor(){
    this.style.color = "brown";
}

elt.addEventListener("click", changeColor, false);