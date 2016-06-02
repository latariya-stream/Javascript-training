var elt = document.getElementById("google-link");

//elt.onclick = function() {
//  return false;
//}

elt.addEventListener("click", function(e) { e.preventDefault() }, false)
