getAlbum = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever")
        if (response.ok){
            let album = await response.json()
            this.setState({
             album
         })
            console.log("albums", album)
        } else {
         throw new Error("Couldnt fetch data");
        }
    } catch (error) {
     console.log(error);
     throw error;
    }
    return album
}