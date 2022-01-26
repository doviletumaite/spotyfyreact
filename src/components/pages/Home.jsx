import { useEffect, useState } from "react";
import getAlbum from "../../fetch/fetchAlbums.js";
import AlbumCard from "../AlbumCard.jsx";

const Home =  () => {
    const [album, setAlbum] = useState([])


    const [greenDay, setGreenDay] = useState([])
    const [oliviaRodrigo, setOliviaRodrigo] = useState([])

    useEffect(() => {
      getAlbum("green day").then((response)=> setGreenDay(response))
      getAlbum("olivia rodrigo").then((response)=> setOliviaRodrigo(response))
      getAlbum()
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
