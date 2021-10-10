const getAlbum = async (query) => {
    
       let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
        if (response.ok){
            let album = await response.json()
            console.log("albums", album)
            return album.data
            
        } else {
         throw new Error("Couldnt fetch data");
        }

}
export default getAlbum