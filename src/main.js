import './style.css'
import { URL } from './js/utils/API_Data'; 
import { getImages } from './js/getImages';

const more_btn = document.getElementById('more_img')

getImages(URL)

more_btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    getImages(URL); 
})