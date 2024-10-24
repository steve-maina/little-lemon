import "./Testimony.css";
import Rating from "./Rating";
function Testimony(props) {
    return (
        <div className="testimony-single">
            <Rating rating={props.rating}/>
            <img src={props.image} height="85" width="85" className="profile"/>
            <p className="testimony-name">{props.name}</p>
            <p>{props.review}</p>
        </div>
    )
}

export default Testimony;