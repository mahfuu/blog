import React, { useContext, useEffect } from "react"
import { ThemeContext } from "../themeContext.js"

import Article from "../components/Article.js"

function Daughter(){
    const { daughters, getDaughterData } = useContext(ThemeContext)

    useEffect(() => {
        getDaughterData()
    }, [])

    const renderDaughterArticles = daughters.map(article => (
        <Article {...article} key={article._id} />
    ))

    return(
        <div>
            <h1>This is the daughter blog page.</h1>
            <ul>
                {renderDaughterArticles}
            </ul>
        </div>
    )
}

export default Daughter