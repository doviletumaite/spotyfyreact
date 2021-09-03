import { Component } from "react";
class AlbumCard extends Component {
    state = {
        album: []
    }
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
    }

    componentDidMount() {
        this.getAlbum()
    }

  render() {
    return (
      <div className="card">
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQeJKQanUoQ9OVgDBYXCt0JvCr1w-DMXnSYSltzvQEZAk1GxRdg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Mindfulness in Voce</h5>
          <p className="card-text">Mindfulness Bergamo</p>
        </div>
      </div>
    );
  }
}
export default AlbumCard;
