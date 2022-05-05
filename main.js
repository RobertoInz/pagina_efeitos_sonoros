function tocaSom (seletorAudio) {
	const elemento = document.querySelector(seletorAudio);

	if (elemento && elemento.localName === 'audio') {
		elemento.play();
	}	
	else {
		//alert('Elemento não encontrado')
		console.log('Elemento não encontrado ou seletor inválido');
	}
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) { //usando for ao inves de while pra deixar codigo mais limpo
	const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    } 

    tecla.onkeydown = function (evento) {

    	if (evento.code === 'Space' || evento.code === 'Enter') {
    		tecla.classList.add('ativa');
    	}
    }	
}