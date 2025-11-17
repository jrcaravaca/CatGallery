export function getFavorites() {
    // -- Variables y constantes    
    let urlsFavoritas;
    const gallery = document.getElementById('gallery'); 
    gallery.innerText = '';

    // -- Si el item favoritos esta en localStorage
    if (localStorage.getItem('favoritos')) {
        // -- Llenamos array de favoritos
        urlsFavoritas = localStorage.getItem('favoritos').split(','); 
            // -- Para cada URL dentro del array
            for (let i = 0; i < urlsFavoritas.length; i++) {
            // -- Creamos un contenedor para las imagenes
            const img_container = document.createElement('div'); 
            const cargarBtn = document.getElementById('more_img')
            img_container.classList = 'flex flex-col items-center justify-center'
            // -- Creamos un botón de like para las imagenes
            const like_btn = document.createElement('button'); 
            like_btn.classList = 'cursor-pointer'
            const btn_img = document.createElement('img');
            btn_img.classList = 'max-w-[30px]'
            btn_img.src = "./icons/corazon_lleno.png"; 

            // -- Añadimos funcionalidad al botón
            like_btn.addEventListener('click', (e) => {
                e.preventDefault(); 
                // -- Con esto, eliminamos la imágen de favoritos, del array y llamamos recursivamente para cargar 
                // las que queden
                if (img.dataset.like === "true") {
                    btn_img.src = "./icons/corazon.png"; 
                    img.dataset.like = 'false' 
                    urlsFavoritas.splice(i);
                    localStorage.setItem('favoritos',urlsFavoritas)
                    gallery.removeChild(img_container)
                    getFavorites()
                }
            })

            // -- Creamos las imágenes con las urls del array
            const img = document.createElement('img');
            img.classList = 'aspect-square max-w-[250px] mb-1 border rounded'
            img.setAttribute('src',urlsFavoritas[i])
            img.dataset.like = 'true'


            // -- Añadimos todo al DOM
            img_container.appendChild(img); 
            like_btn.appendChild(btn_img); 
            img_container.appendChild(like_btn); 
            gallery.appendChild(img_container);
            cargarBtn.style.display = 'none'; 
            localStorage.setItem('favoritos', urlsFavoritas)
        }
    } else {
        // -- Si no hay imágenes marcadas como favoritas, mensaje de texto indicandolo
        const text = document.createElement('p'); 
        gallery.classList.remove('xl:grid', 'xl:grid-cols-5')
        text.innerText = 'Aún no has marcado imágenes como favoritas'
        gallery.appendChild(text); 
    }
}