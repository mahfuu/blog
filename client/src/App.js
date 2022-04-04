import React from "react"

import { Routes, Route, Link } from "react-router-dom"

import Error from "./screens/Error"
import Blog from "./screens/Blog"
import NewDaughter from "./screens/NewDaughter"
import Daughter from "./screens/Daughter"

// Blog for Coding and Current Events soon

function App(){
  
  return(
    <>
      <header>
        This is header
      </header>
      <nav>
        <div>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <Link to="/daughter">Daughter</Link>
        </div>
        <div>
          <Link to="/newDaughter">New-Daughter</Link>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/daughter" element={<Daughter />} />
          <Route path="/newDaughter" element={<NewDaughter />} />
        </Routes>
      </main>
      <footer>
        This is footer
      </footer>
    </>
  )
}

export default App