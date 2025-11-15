import './style.css'
import { URL } from './js/API_Data'; 
import { getImages } from './js/getImages';

const gallery = document.getElementById('gallery'); 
const data = getImages(URL); 

console.log(data)
for (let i = 0; i < 11; i++) {
    let img = document.createElement('img'); 
    
}

