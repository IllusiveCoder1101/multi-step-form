import React from 'react'
import Main_ui from './components/Main_ui'
import Sidebar_1 from './components/Sidebar_1'

function App() {
  
  return (
    <div role={"main"} className="container">
      <main className="subContainer">
        <Sidebar_1/>
        <Main_ui/>
        
      </main>
      
    </div>
  )
}

export default App