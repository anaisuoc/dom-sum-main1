import moment from 'moment-timezone';

/*menu responsive*/
// const hamburguer = document.querySelector('.menu-ham');
// const links = document.querySelector('ul');
// const bars = document.querySelectorAll('.menu-ham span');

// hamburguer.addEventListener('click', function () {
// 	links.classList.toggle('show');
// 	bars.forEach(function (child) {
// 		child.classList.toggle('animation');
// 	});
// });


/*slider*/
// let box = document.querySelectorAll('.box-clip-path');
// box.forEach(function (popup) {
// 	popup.addEventListener('click', function () {
// 		popup.classList.toggle('active');
// 	});
// });

/*hora en Bangkok*/
let date = moment();
date.tz('Asia/Bangkok');
//document.getElementById('hora-bangkok').innerHTML = date.format('LT');


/*validación de formulario*/
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorname = document.getElementById('warning-name');
const erroremail = document.getElementById('warning-email');
const errormessage = document.getElementById('warning-message');

// form.addEventListener('submit', function (evt) {
// 	evt.preventDefault();
// 	let warningname = '';
// 	let warningemail = '';
// 	let warningmessage = '';
// 	let getin = false;
// 	let regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
// 	errorname.innerHTML = '';
// 	erroremail.innerHTML = '';
// 	errormessage.innerHTML = '';

// 	if (name.value.length <= 2 || name.value.length >= 40) {
// 		warningname += 'El nombre debe tener entre 2 y 40 caracteres.';
// 		getin = true;
// 	}

// 	if (!regexpEmail.test(email.value)) {
// 		warningemail += 'El formato de email que se ha introducido es incorrecto.';
// 		getin = true;
// 	}

// 	if (message.value.length <= 5 || message.value.length >= 250) {
// 		warningmessage += 'El mensaje debe tener entre 5 y 250 caracteres.';
// 		getin = true;
// 	}

// 	if (getin) {
// 		errorname.innerHTML = warningname;
// 		erroremail.innerHTML = warningemail;
// 		errormessage.innerHTML = warningmessage;
// 	}
// });

//lazy loading
if ('loading' in HTMLImageElement.prototype) {
	// Si el navegador soporta lazy-load, tomamos todas las imágenes que tienen la clase
	// `lazyload`, obtenemos el valor de su atributo `data-src` y lo inyectamos en el `src`.
	console.log('Browser support `loading`...');
	const images = document.querySelectorAll("img.lazyload");
	images.forEach(img => {
		if (img.dataset.src) {
			//img.src = img.dataset.src;
			img.src =  'logotipo.b4007ab0.svg';
			console.log(img.src);
		}
	});
} else {
	console.log('Not supported');

	// Importamos dinámicamente la libreria `lazysizes`
	let script = document.createElement("script");
	script.async = true;
	script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js";
	document.body.appendChild(script);
}