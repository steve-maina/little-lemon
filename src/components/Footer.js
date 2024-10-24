import Logo from '../icons_assets/Logo.svg';
import Nav from './Nav';
import './Footer.css';
function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-img">
                <img src={Logo}/>
            </div>
            <div className="footer-nav">
                <p>Navigation</p>
                <Nav />
            </div>
            <div>
                <p>Contact</p>
                <p>0901890</p>
                <p>email@email.com</p>
                <p>123 Park Avenue</p>
            </div>
            <div className="footer-socials">
                <p>Social Media Links</p>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </div>
        </footer>
    )
}

export default Footer;