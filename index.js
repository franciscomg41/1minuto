var game = "off";
var numAleatorio = 0;
var verde = 0;
var rojo = 0;
function start(){
	document.getElementById("boton").disabled = true;
	game = "on";
	actualizarMarcador();
	numeroAleatorio();
	setTimeout("contador(60);",1000);
}
function check(n){
	if(game=="on"){
		var dif = Math.abs(n.innerHTML - numAleatorio);
		var error = 0;
		for (var i = 0; i < 4; i++) {
			var temp = Math.abs(document.getElementById("div"+(i+1)).innerHTML - numAleatorio);
			if(temp<dif){
				error++;
			}
		}
		if(error==0){
			verde++;
			transicion("verde");
		}else{
			rojo++;
			transicion("rojo");
		}
		actualizarMarcador();
		numeroAleatorio();
	}
}
function transicion(div){
	var element = document.getElementById(div);
	element.addEventListener('webkitAnimationEnd', function(){
		this.style.webkitAnimationName = '';
	}, false);
	element.style.webkitAnimationName = 'animatronic';
}
function actualizarMarcador(){
	document.getElementById("verde").innerHTML = verde;
	document.getElementById("rojo").innerHTML = rojo;
}
function numeroAleatorio(){
	numAleatorio = Math.round(Math.random()*100);
	document.getElementById("numero").innerHTML = numAleatorio;
	otrosNumeros(numAleatorio);
}
function otrosNumeros(n){
	var array = [-1,-1,-1,-1];
	for (var i = 0; i < 4; i++) {
		do{
			array[i] = Math.round(Math.random()*100);
		}while(array[i]==n);
	}
	array.sort(randOrd);
	for (var i = 0; i < 4; i++) {
		document.getElementById("div"+(i+1)).innerHTML = array[i];
	}
}
/*
function otrosNumeros(n){
	var array = [-1,-1,-1,-1];
	for (var i = 0; i <= 3; i++) {
		do{
			array[i] = Math.round(Math.random()*100);
		}while((array[i]==n)||(array[i]>n));
	}
	do{
		array[3] = Math.round(Math.random()*100);
	}while((array[3]==n)||(array[3]<n));
	array.sort(randOrd);
	for (var i = 0; i <= 4; i++) {
		document.getElementById("div"+(i+1)).innerHTML = array[i];
	}
}
*/
function contador(segs){
	segs = segs-1;
	document.getElementById('tiempo').innerHTML = "0:"+formato2(segs);
	if(segs>0){
		setTimeout("contador("+segs+")",1000);
	}else{
		document.getElementById("boton").disabled = false;
		game = "off";
		verde = 0;
		rojo = 0;
	}
}
function formato2(n){
	if ((n<10)&(n>=0)){
		return "0"+n;
	}else{
		return n;
	}
}
function randOrd(){
	return (Math.round(Math.random())-0.5);
}