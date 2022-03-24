//
//Nom: Albert Gonzalez
//
var img = new Array;

window.onload = function () {
	formatH2();
	carregaImatges();
	initImatges(); 
	createButton();
	divControl();
}

function createButton() {

	let btn = document.createElement("button");
	btn.innerHTML = "Mostra imatges";
	btn.setAttribute("id","clearBtn");
	document.body.appendChild(btn);

	let elem = document.getElementById("clearBtn");
	elem.addEventListener('click',showImages);
	elem.style.visibility = "hidden";

}

function divControl() {

	var elems = document.getElementsByTagName("div");

	for (var i = 0; i < elems.length; i++) {
		elems[i].addEventListener("click",divOnclick)
	}

}

function divOnclick() {

	window.alert('has de clicar sobre la imatge');

}

function carregaImatges (){
//  Image preloading
	img[0] = new Image;
	img[0].src  = "img/gnulinux.jpg"
	img[1] = new Image;
	img[1].src  = "img/gnu.jpg"
	img[2] = new Image;
	img[2].src  = "img/linux.jpg"
}
function initImatges() {
	//	'alt="gnu/linux" width="125" height="125"';
	var x = document.getElementsByTagName("img");
	for (var i = 0; i < x.length; i++) {

		x[i].src = img[i % 3].src;
		x[i].alt = "gnu/linux";
		x[i].width = "125";
		x[i].height = "125";
		x[i].addEventListener('click',imgOnclick);
		x[i].addEventListener('dblclick',imgOndoubleclick);
		//x[i].draggable = true; //Les imatges true per defecte
		//x[i].addEventListener("dragstart", dragStart);
		//x[i].parentNode.addEventListener("dragover", allowDrop);
		//x[i].parentNode.addEventListener("drop", drop);
	}
}

function imgOnclick(e){

		var ruta = this.src;
		//window.alert(ruta);
		if (ruta == img[0].src){
			ruta = 'img/linux.jpg';
		}
		if (ruta == img[1].src){
			ruta = 'img/gnulinux.jpg';
		}
		 if(ruta == img[2].src) {
			ruta = 'img/gnu.jpg';
		}
		this.src = ruta;
		console.log(this)


		e.stopPropagation();

}

function imgOndoubleclick() {
	//window.alert(this.style.visibility.valueOf());
	if (this.style.visibility === 'visible'){
		this.style.visibility = 'hidden';
		let byId = document.getElementById("clearBtn");
		byId.style.visibility = 'visible';
	}
	else{
		this.style.visibility = 'visible';
	}
}

function showImages() {
	var x = document.getElementsByTagName("img");
	for (var i = 0; i < x.length; i++) {
		x[i].style.visibility = 'visible';
	}
	let byId = document.getElementById("clearBtn");
	byId.style.visibility = 'hidden';
}

function formatH2 () {
	var x = document.getElementsByTagName("h2");
	for (var i = 0; i < x.length; i++) {
		x[i].style.backgroundColor = "#aaaaff";
	}
}
