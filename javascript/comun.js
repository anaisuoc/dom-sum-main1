/*menu responsive*/
const hamburguer = document.querySelector('.menu-ham');
const links = document.querySelector('ul');
const bars = document.querySelectorAll('.menu-ham span');

hamburguer.addEventListener('click', function () {
	links.classList.toggle('show');
	bars.forEach(function (child) {
		child.classList.toggle('animation');
	});
});

/*lazy loading*/
if ('loading' in HTMLImageElement.prototype) {
	const images = document.querySelectorAll("img.lazyload");
	images.forEach(img => {
		img.src = img.dataset.src;
	});
} else {
	let script = document.createElement("script");
	script.async = true;
	script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js";
	document.body.appendChild(script);
}