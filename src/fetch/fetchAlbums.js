const getAlbum = async (query) => {
    
       let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
        if (response.ok){
            let album = await response.json()
            return album.data
            console.log("albums", album)
        } else {
         throw new Error("Couldnt fetch data");
        }

}
export default getAlbum