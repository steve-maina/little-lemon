import './Nav.css';
import { Link } from 'react-router-dom';
function Nav(props) {
    return (
        <nav>
            <ul className={`${props.orientation} nav-links`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <Link to="/reserve">Reservations</Link>
                </li>
                <li>
                    <a href="#">Order Online</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;