var elt = document.getElementById( "header" );

var handler = function() { 
	this.style.color = "red";
};

var handlerOut = function() {
	this.style.color = "initial";
	this.removeEventListener( "mouseover", handler, false  ) 
};

<!-- перехват события через свойство обьекта не самый лучший вариант из-за ограничений количества обработчиков при возникновении того же события -->
//elt.onclick = function(){
//    alert("Работает");
//    this.style.color="red";
//}


<!-- Более универсальный способ это метод addEventListener и attachEvent() <- IE -->

if( elt.addEventListener ) {
	elt.addEventListener( "mouseover", handler, false );
	elt.addEventListener( "mouseout", handlerOut, false );
}
else {
	elt.attachEvent( "onmouseover", handler );
}
