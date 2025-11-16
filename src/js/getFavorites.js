import { Spinner } from "spin.js";
import "spin.js/spin.css";
import { opts } from "./utils/spinner_opts";

export function getFavorites() {
    let favoritas = localStorage.getItem('favoritos')
    favoritas = favoritas.split(',')
    console.log(favoritas)

    const gallery = document.getElementById('gallery'); 
    gallery.innerText = '';

    for (let i = 0; i < favoritas.length; i++) {
        // contenedor principal de imágenes
        const img_container = document.createElement('div'); 
        img_container.classList = 'flex flex-col items-center justify-center'
        // botón de like
        const like_btn = document.createElement('button'); 
        like_btn.classList = 'cursor-pointer'
        const btn_img = document.createElement('img');
        btn_img.classList = 'max-w-[30px]'
        btn_img.src = "./icons/corazon_lleno.png"; 

        like_btn.addEventListener('click', (e) => {
            e.preventDefault(); 
            if (img.dataset.like === "false") {
                btn_img.src = "./icons/corazon_lleno.png"; 
                img.dataset.like = 'true' 
                urls_favoritas.push(data[i].url); 
                if (!localStorage.getItem('favoritos')) {
                    localStorage.setItem('favoritos', urls_favoritas); 
                } else {
                    localStorage.setItem('favoritos', urls_favoritas); 
                }
                console.log(urls_favoritas); 
            } else {
                btn_img.src = "./icons/corazon.png"; 
                img.dataset.like = 'false' 
            }
        })

        // imágenes
        const img = document.createElement('img');
        img.classList = 'aspect-square max-w-[250px] mb-1 border rounded'
        img.setAttribute('src',favoritas[i])
        img.dataset.like = 'true'


        img_container.appendChild(img); 
        like_btn.appendChild(btn_img); 
        img_container.appendChild(like_btn); 
        gallery.appendChild(img_container);
    }
}