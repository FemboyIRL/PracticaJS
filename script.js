const textTitulo = document.querySelector('.infoTitulo')
const textSubtitulo = document.querySelector('.infoSubtitulo')
const textDescripcion = document.querySelector('.infoParrafo')
const inputTitulo = document.querySelector('#formTitulo')
const inputSubtitulo = document.querySelector('#formSubtitulo')
const inputDescripcion = document.querySelector('#formDescripcion')
const formCourse = document.querySelector('#formCourse')
const cajaInfo = document.querySelector('.cajaInfo')
const imgMin = document.querySelector('.imgMin')
const center1 = document.querySelector('.center1')
const min = document.querySelector('.min')
//-- FUNCIONES --//

function actualizarCurso(e){
    e.preventDefault();
    textTitulo.querySelector('h1').innerText = inputTitulo.value;
    textSubtitulo.querySelector('h2').innerText = inputSubtitulo.value;
    textDescripcion.querySelector('p').innerText = inputDescripcion.value;
    this.reset();

}


function actualizarImagen(e){
    if(e.target.src == null){
        return
    }else{
        center1.style.backgroundImage = `url('${e.target.src}')`;
    }

}

//-- EVENTOS --//

formCourse.addEventListener('submit', actualizarCurso);
imgMin.addEventListener('click', actualizarImagen);