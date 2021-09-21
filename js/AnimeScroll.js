const card = document.querySelectorAll('[data-anime]')

function animeScroll(){
	const topoPagina = window.pageYOffset + (window.innerHeight*3)/4;

	card.forEach(function(elemento){
		if(topoPagina > elemento.offsetTop){
			elemento.classList.add('anime');
		}else{
			elemento.classList.remove('anime');
		}
	})
}

window.addEventListener('scroll', function(){
	animeScroll();
});