var elt = document.getElementById("header");
var handler = function(){ this.style.color = "red" };


<!-- перехват события через свойство обьекта не самый лучший вариант из-за ограничений количества обработчиков при возникновении того же события -->
//elt.onclick = function(){
//    alert("Работает");
//    this.style.color="red";
//}

<!-- Более универсальный способ это метод addEventListener и attachEvent() <- IE -->

if( elt.addEventListener ) elt.addEventListener("mouseover", handler, false);
else elt.attachEvent("onmouseover", handler);
