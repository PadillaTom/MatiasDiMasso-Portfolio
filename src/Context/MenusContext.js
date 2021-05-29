import React, {createContext, useReducer} from "react"

import {SIDEBAR_OPEN, SIDEBAR_CLOSE} from "./actions"
import reducer from "../Reducers/menus_reducer"

const initialState = {
    isSidebarOpen: false,
}

const MenusContext = createContext();

const MenusProvider = ({children}) => {
    // *** Reducer ***
    const [state, dispatch] = useReducer(reducer, initialState);

    // *** Sidebar ***
    const openSidebar = () => {
        dispatch ({type: SIDEBAR_OPEN});
    };
    const closeSidebar =() => {
        dispatch ({type: SIDEBAR_CLOSE});
    }

    return (
        <MenusContext.Provider value= {{...state, openSidebar, closeSidebar}}>
            {children}
        </MenusContext.Provider>
    )
}

export {MenusContext, MenusProvider}

