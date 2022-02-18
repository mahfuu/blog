import React, { useState } from "react"
import axios from "axios"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){
    const [daughters, setDaughters] = useState([])

    const getDaughterData = () => {
        axios.get("/daughter")
            .then(res => setDaughters(res.data))
            .catch(err => console.log(err))
    }

    return(
        <ThemeContext.Provider
            value={{
                daughters,
                getDaughterData
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider, ThemeContext }