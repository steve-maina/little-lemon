import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function Main(props){
    const setDrawerState = useOutletContext()
    const {drawerState}=useContext(AppContext)
    return (
        <main onClick={()=>{
            if(drawerState == "open"){
            setDrawerState("closed");
            }
            }}>
            {props.children}
        </main>
    )
}

export default Main;