export function getImages(URL){
    const gallery = document.getElementById('gallery'); 
    gallery.innerText = ""; 
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const img = document.createElement('img');
                img.classList.add('aspect-square', 'max-w-[250px]')
                img.setAttribute('src',data[i].url)
                gallery.appendChild(img);
            }
        })
}