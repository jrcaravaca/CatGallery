import './style.css'
import { URL } from './js/utils/API_Data'; 
import { getImages } from './js/getImages';
import { getFavorites } from './js/getFavorites';

const more_btn = document.getElementById('more_img'); 
const fav = document.getElementById('fav'); 
const hombeBtn = document.getElementById('home'); 
const moreImg = document.getElementById('more_img'); 

getImages(URL)

more_btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    getImages(URL); 
})

fav.addEventListener('click', (e) => {
    e.preventDefault()
    getFavorites()
})

hombeBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    getImages(URL)
    moreImg.style.display = 'block'
})