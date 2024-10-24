import Main from "./Main";
import Highlights from './Highlights';
import Testimonial from './Testimonial';
import Hero from './Hero';
import About from "./About";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { useEffect } from "react";
import { useState } from "react";
function HomePage() {
    const {setDrawerHighlight,drawerHighlight} = useContext(AppContext);
    useEffect(()=>{
    //setDrawerHighlight("home")
    },[])
    // useEffect(()=> {
    //     console.log(drawerHighlight)
    // })
    return (
        <Main>
                <Hero />
                <Highlights />
                <Testimonial />
                <About />
        </Main>
    )
}

export default HomePage;