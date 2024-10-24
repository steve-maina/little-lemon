import RestaurantFood from '../icons_assets/restauranfood.jpg';
import './Hero.css';
import { Link } from "react-router-dom";
function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-description">
                <h2>Little Lemon</h2>
                <p>Chicago</p>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/reserve">Reserve a Table</Link>
            </div>
            <div className="hero-img">
                <img src={RestaurantFood} height="400" width="400" className="hero-img"/>
            </div>
        </section>
    )
}

export default Hero;