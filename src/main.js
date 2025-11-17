import './style.css'
import { URL } from './js/utils/API_Data'; 
import { getImages } from './js/getImages';
import { getFavorites } from './js/getFavorites';

// -- Constantes de los elementos del DOM
const more_btn = document.getElementById('more_img'); 
const fav = document.getElementById('fav'); 
const hombeBtn = document.getElementById('home'); 
const moreImg = document.getElementById('more_img'); 

// -- Al cargar la página siempre se hace una primera llamada a la API
getImages(URL)

// -- Funcionalidad del botón cargar más
more_btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    getImages(URL); 
})

// -- Funcionalidad del botón de favoritos
fav.addEventListener('click', (e) => {
    e.preventDefault()
    getFavorites()
})

// -- Funcionalidad del botón home
hombeBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    getImages(URL)
    moreImg.style.display = 'block'
})