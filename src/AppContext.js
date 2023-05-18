import { createContext, useState } from "react";
export const AppContext=createContext({})
export const AppProvider=({children})=>{
    const [show, setShow]=useState(true)
    return <AppContext.Provider value={{show}}>
        {children}
    </AppContext.Provider>
}