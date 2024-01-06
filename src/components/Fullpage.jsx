import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Projects from './Projects'
import Technologies from './Technologies'
import Contact from './Contact'
function Fullpage() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Projects/>
      <Technologies/>
      <Contact/>
    </div>
  )
}

export default Fullpage
