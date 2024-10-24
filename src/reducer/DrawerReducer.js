export const paths = {
    Home:"home",
    About: "about"
}

export const initialDrawerState = [{"path":"home","status":"inactive"},{"path":"reserve","status":"inactive"}];


export const h_state = {
    Active:"active",
    Inactive:"inactive"
}

export const drawerReducer = (state, path) => {
    const newState = state.map(entry => {
        if (entry["path"] === path){
            return {"path":path,"status":"active"};
        }
        return {"path":path, "status":"inactive"};
        }
    )
    newState.forEach(state => {
        console.log(`${state["path"]} --> ${state["status"]}`)
    })
    return newState
}