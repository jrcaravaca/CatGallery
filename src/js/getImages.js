import { Spinner } from "spin.js";
import "spin.js/spin.css";
import { opts } from "./utils/spinner";

export function getImages(URL){
    const gallery = document.getElementById('gallery'); 
    gallery.innerText = '';

    const spinner = new Spinner(opts).spin(gallery);
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            gallery.innerText = ''; 
            for (let i = 0; i < data.length; i++) {
                // contenedor principal de imágenes
                const img_container = document.createElement('div'); 
                img_container.classList = 'flex flex-col items-center justify-center'
                // botón de like
                const like_btn = document.createElement('button'); 
                like_btn.classList = 'cursor-pointer'
                const btn_img = document.createElement('img');
                btn_img.classList = 'max-w-[30px]'
                btn_img.src = "./icons/corazon.png"; 

                // imágenes
                const img = document.createElement('img');
                img.classList = 'aspect-square max-w-[250px] mb-1 border rounded'
                img.setAttribute('src',data[i].url)


                img_container.appendChild(img); 
                like_btn.appendChild(btn_img); 
                img_container.appendChild(like_btn); 
                gallery.appendChild(img_container);
            }
        })
        .catch(() => {
            const errorTxt = document.createElement('p'); 
            gallery.classList.remove('lg:grid', 'lg:grid-cols-5')
            errorTxt.textContent = 'Ha ocurrido un error, no se han podido cargar las imágenes'; 
            errorTxt.classList = 'text-center text-2xl'; 
            gallery.appendChild(errorTxt); 
            spinner.stop()
        })
}