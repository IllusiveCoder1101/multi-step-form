import React from 'react'
import Main_ui from './components/Main_ui'
import Sidebar_1 from './components/Sidebar_1'

function App() {
  
  return (
    <main role={"main"} className="container">
      <section className="subContainer">
        <Sidebar_1/>
        <Main_ui/>
        
      </section>
      
    </main>
  )
}

export default App