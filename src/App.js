import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from './context/AppContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const {drawerState, setDrawerState, drawerHighlight} = useContext(AppContext);
  const {pathname} = useLocation()
  useEffect(()=> {

  })
  return (
    <>
      <div className={`drawer ${drawerState}`}>
        <p className={`${pathname === "/" ? "active" : ""}`}><Link to="/" onClick={()=>{setDrawerState("closed")}}>Home</Link></p>
        <p className={`${pathname === "/reserve" ? "active":""}`}><Link to="/reserve" onClick={()=>{setDrawerState("closed")}}>Reserve</Link></p>
      </div>
      <div className="main-container">
        <Header>
          <Nav orientation="nav-links-vertical"/>
        </Header>
        <Outlet context={setDrawerState}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
