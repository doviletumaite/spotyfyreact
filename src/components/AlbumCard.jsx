
import "./albumCard.css"
const AlbumCard = (props) => {

 
    return (
      <div className="card">
        <img
          src={props.src}
          className="card-img-top"
          alt=""
          key={props.key}
        />
        <div className="card-body">
          <h5 className="card-title">Mindfulness in Voce</h5>
          <p className="card-text">Mindfulness Bergamo</p>
        </div>
      </div>
    );
  
}
export default AlbumCard;
