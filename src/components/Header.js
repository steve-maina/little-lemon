import './Header.css';
import Logo from '../icons_assets/Logo.svg';
import Menu from '../icons_assets/icon _hamburger_menu.svg';
import Basket from '../icons_assets/Basket.svg';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const {setDrawerState, drawerState} = useContext(AppContext)
    const navigate = useNavigate()
    return (
        <header className="header-component">
            <div className="header-menu header-mobile">
            <img src={Menu} className={`header-mobile`} onClick={()=>{
                setDrawerState("open")
            }}/>
            </div>
            <div className="header-logo">
            <img src={Logo} id="header-img" onClick={() => {
                if(drawerState == "open"){
                    setDrawerState("closed");
                }
                navigate("/");

            }}/>
            </div>
            <div className="header-nav-links">{props.children}</div>
            <div className="header-basket header-mobile">
            <img src={Basket} className={`header-mobile`}/>
            </div>
        </header>
    )
}

export default Header;