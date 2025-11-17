import { Spinner } from "spin.js";
import "spin.js/spin.css";
import { opts } from "./utils/spinner_opts";


export function getImages(URL){
    // Función para obtener imagenes aleatorias y mostrarlas
    // -- Constantes DOM
    const gallery = document.getElementById('gallery'); 
    // ## En este punto se añaden las clases a la galería
    gallery.classList = "min-h-[600px] relative flex flex-col mb-3 xl:grid xl:grid-cols-5 items-center justify-center gap-2 ";
    gallery.innerText = '';

    // -- Si hay datos guardados en localStorage, se cogen si no se crea un array vacio
    let urls_favoritas; 

    if (localStorage.getItem('favoritos')) {
        urls_favoritas = localStorage.getItem('favoritos').split(','); 
    } else {
        urls_favoritas = []; 
    }

    // -- Spinner para los tiempos de carga
    const spinner = new Spinner(opts).spin(gallery);

    // -- Fetch para obteción de datos de la API
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            // -- Limpiamos lo que pueda haber antes en la galeria
            gallery.innerText = ''; 
            for (let i = 0; i < data.length; i++) {
                // ## Para cada imágen se genera un contenedor propio
                const img_container = document.createElement('div'); 
                img_container.classList = 'flex flex-col items-center justify-center'

                // ## Para cada imágen se genera un botón de like
                const like_btn = document.createElement('button'); 
                like_btn.classList = 'cursor-pointer'
                // ## Dentro del botón se genera una imagen para poder el icono
                const btn_img = document.createElement('img');
                btn_img.classList = 'max-w-[30px]'
                btn_img.src = "./icons/corazon.png"; 

                // -- Evento del botón de like
                like_btn.addEventListener('click', (e) => {
                    e.preventDefault(); 

                    // -- Dependiendo de si la imagen está marcada como favorita o no, tiene un dataset en true o false
                    // y aparece con el boton coloreado o no
                    if (img.dataset.like === "false") {
                        btn_img.src = "./icons/corazon_lleno.png"; 
                        img.dataset.like = 'true' 
                        // -- Si no está marcada como favorita se pushea al array de urls favoritas
                        urls_favoritas.push(data[i].url); 
                        localStorage.setItem('favoritos', urls_favoritas); 
                    } else {
                        // -- Si está marcada, se quita de favoritos
                        btn_img.src = "./icons/corazon.png"; 
                        img.dataset.like = 'false' 
                        let index = urls_favoritas.findIndex((element) => element === data[i].url) 
                        urls_favoritas.splice(index); 
                        localStorage.setItem('favoritos', urls_favoritas); 
                        // ** añadir que cuando se quite el like se quite de localStorage
                    }
                })

                // -- Creacion de imagen 
                const img = document.createElement('img');
                img.classList = 'aspect-square max-w-[250px] mb-1 border rounded'
                img.setAttribute('src',data[i].url)
                img.dataset.like = 'false'
                // -- Si la imagen esta en el array de favoritos, ya aparece marcada y con el icono coloreado
                if (urls_favoritas.includes(data[i].url)) {
                        img.dataset.like = 'true'; 
                        btn_img.src = "./icons/corazon_lleno.png"
                    }

                // -- Añadimos todos los nodos creados a la galeria
                img_container.appendChild(img); 
                like_btn.appendChild(btn_img); 
                img_container.appendChild(like_btn); 
                gallery.appendChild(img_container);
            }
        })
        .catch(() => {
            // -- Si hay un error, aparece un mensaje de error en la galería
            const errorTxt = document.createElement('p'); 
            gallery.classList.remove('lg:grid', 'lg:grid-cols-5')
            errorTxt.textContent = 'Ha ocurrido un error, no se han podido cargar las imágenes'; 
            errorTxt.classList = 'text-center text-2xl'; 
            gallery.appendChild(errorTxt); 
            spinner.stop()
        })
}