import "./Special.css";

function Special(props) {
    return (
        <div className="special-container">
            <div className="special-img">
            <img src={props.image} />
            </div>
            <div className="special-info">
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
            <div className="special-description">
                {props.description}
            </div>
        </div>
    )
}

export default Special;