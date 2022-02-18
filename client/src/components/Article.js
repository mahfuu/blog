import React, { useContext } from "react"
import { ThemeContext } from "../themeContext.js"

function Article(props){
    const { title } = props

    return(
        <li style={{listStyle: "none"}}>
            <h1>article: {title}</h1>
        </li>
    )
}

export default Article