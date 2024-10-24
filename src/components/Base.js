import { useState } from "react";
import { useMemo } from "react";
import AppContext from "../context/AppContext";
import { useReducer } from "react";
import { initialDrawerState,drawerReducer } from "../reducer/DrawerReducer";

function Base(props) {
    const [drawerState, setDrawerState] = useState("initial");
    const [drawerHighlight, setDrawerHighlight] = useReducer(drawerReducer,initialDrawerState)

    const drawer = useMemo(()=>({drawerState, setDrawerState,drawerHighlight,setDrawerHighlight}),
    [drawerState]);


    return (<AppContext.Provider value={drawer}>
        {props.children}
    </AppContext.Provider>
    )
}

export default Base;