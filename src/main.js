import './style.css'
import { URL } from './js/utils/API_Data'; 
import { getImages } from './js/getImages';
import { getFavorites } from './js/getFavorites';

const more_btn = document.getElementById('more_img'); 
const fav = document.getElementById('fav'); 

getImages(URL)

more_btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    getImages(URL); 
})

fav.addEventListener('click', (e) => {
    e.preventDefault()
    getFavorites()
})