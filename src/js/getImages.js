export function getImages(URL){
fetch(URL)
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data); 
})

}