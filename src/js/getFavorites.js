import { Spinner } from "spin.js";
import "spin.js/spin.css";
import { opts } from "./utils/spinner_opts";

export function getFavorites() {
    let urlsFavoritas;
    const gallery = document.getElementById('gallery'); 
    gallery.innerText = '';

    if (localStorage.getItem('favoritos')) {
        urlsFavoritas = localStorage.getItem('favoritos').split(','); 
    } else {
        const text = document.createElement('p'); 
        gallery.classList.remove('lg:grid', 'lg:grid-cols-5')
        text.innerText = 'Aún no has marcado imágenes como favoritas'
        gallery.appendChild(text); 
    }



    for (let i = 0; i < urlsFavoritas.length; i++) {
        // contenedor principal de imágenes
        const img_container = document.createElement('div'); 
        const cargarBtn = document.getElementById('more_img')
        img_container.classList = 'flex flex-col items-center justify-center'
        // botón de like
        const like_btn = document.createElement('button'); 
        like_btn.classList = 'cursor-pointer'
        const btn_img = document.createElement('img');
        btn_img.classList = 'max-w-[30px]'
        btn_img.src = "./icons/corazon_lleno.png"; 

        // listener del enlace de favoritas
        like_btn.addEventListener('click', (e) => {
            e.preventDefault(); 
            if (img.dataset.like === "true") {
                btn_img.src = "./icons/corazon.png"; 
                img.dataset.like = 'false' 
                urlsFavoritas.splice(i);
                localStorage.setItem('favoritos',urlsFavoritas)
                gallery.removeChild(img_container)
                getFavorites()
            }
        })
        // imágenes
        const img = document.createElement('img');
        img.classList = 'aspect-square max-w-[250px] mb-1 border rounded'
        img.setAttribute('src',urlsFavoritas[i])
        img.dataset.like = 'true'


        img_container.appendChild(img); 
        like_btn.appendChild(btn_img); 
        img_container.appendChild(like_btn); 
        gallery.appendChild(img_container);
        cargarBtn.style.display = 'none'; 
    }
}