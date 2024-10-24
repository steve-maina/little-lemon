import './Rating.css';
import Star from '../icons_assets/star.webp';
function Rating(props) {
    let ratings = []
    for(let i = 1; i<=props.rating; i++){
        ratings.push(i);
    }
    return (
        <div className="rating-stars">
            {ratings.map(rating => {
                return <img src={Star} width="30" key={rating}/>
            })}
        </div>
    )
}

export default Rating;