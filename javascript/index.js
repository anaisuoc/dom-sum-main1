/*slider*/
let box = document.querySelectorAll('.box-clip-path');
box.forEach( function(popup){ popup.addEventListener('click', 
function(){
	popup.classList.toggle('active');
	});
});