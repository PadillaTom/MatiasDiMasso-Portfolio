import {SIDEBAR_OPEN, SIDEBAR_CLOSE} from "../Context/actions"

const menus_reducer = (state, action) => {
    // *** Sidebar ***
    if (action.type === SIDEBAR_OPEN){
        return {...state, isSidebarOpen: true}
    }
    if (action.type === SIDEBAR_CLOSE){
        return {...state, isSidebarOpen: false}
    }

    // Default:
    return state;
}

export default menus_reducer;