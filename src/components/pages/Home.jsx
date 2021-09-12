import { useEffect, useState } from "react";
import getAlbum from "../../fetch/fetchAlbums";
import AlbumCard from "../AlbumCard";

const Home =  () => {
//     const [album, setAlbum] = setState
// state = {
//     album: [],
//     isLoading: false,
// }
//     getAlbum = async () => {
//        try {
//            const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever")
//            if (response.ok){
//                let album = await response.json()
//                this.setState({
//                 album
//             })
//                console.log("albums", album)
//            } else {
//             throw new Error("Couldnt fetch data");
//            }
//        } catch (error) {
//         console.log(error);
// 		throw error;
//        }
//    }
//  componentDidMount = () => {
// this.getAlbum()
//  }

    const [greenDay, setGreenDay] = useState([])
    const [oliviaRodrigo, setOliviaRodrigo] = useState([])

    useEffect(() => {
      getAlbum("green day").then((response)=> setGreenDay(response))
      getAlbum("olivia rodrigo").then((response)=> setOliviaRodrigo(response))
    }, [])

    return (
   
        <div>
            <h2>Upper section</h2>
            {greenDay && greenDay.slice(0, 4).map((album)=> <AlbumCard src={album.album.cover_medium} key={album.id}/>)}
            <AlbumCard />
            <h2>Down section</h2>
            </div>
    
    )

};
export default Home;
