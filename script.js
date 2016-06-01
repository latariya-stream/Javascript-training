var elt = document.getElementById( "header" );

var handler = function() { 
	this.style.color = "red";
};

var handlerOut = function() {
	this.style.color = "initial";

	if(this.removeEventListener) {
		this.removeEventListener( "mouseover", handler, false  );
	}
	else {
		this.detachEvent( "onmouseover", handler);
	}
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
	elt.attachEvent( "onmouseout", handlerOut );
}
