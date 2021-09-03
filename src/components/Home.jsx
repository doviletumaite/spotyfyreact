import { Component } from "react";
import { Container, Row, InputGroup, Button } from "react-bootstrap";

class Home extends Component {
state = {
    album: [""]
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
 componentDidMount = () => {
this.getAlbum()
 }

render (){
    return (
       <>
        <div>
        <ul>
                    {
                        this.state.album.map(a => (
                            <li  key={a.title}>
                              {JSON.stringify(a).slice(0, 50)}
                            </li>
                        ))
                    }
                </ul>
            </div>
       </>
    )
}
};
export default Home;
