window.onload = start;

var canvas = document.getElementById('imgbox');
var brush = canvas.getContext('2d');

var numbox = document.getElementById('no');

var poks = './images/all-poke.png';
var pokemons = new Image();
pokemons.src = poks;

canvas.width = 200;
canvas.height = 200;

var num = 1;

 
function start(){
	setInterval(drawPokemon , 1000/3);
}

function drawPokemon(){
	var x = (num - 1)%25;
	var y = (num - 1 - x)/25;
	var xx = x*64;
	var yy = y*64;
	brush.clearRect(0,0,canvas.width,canvas.height);
	brush.drawImage(pokemons,xx,yy,60,60,0,0,200,200);
}
function update(){
	num = numbox.value;
	//alert(num);
	
}
function next(){
	if(num < 386){
	num++;
	}else{
		num = 1;
	}
	numbox.value = num;
}
function back(){
	if(num > 1){
	num--;
	}else{
		num = 386;
	}
	numbox.value = num;
}
	