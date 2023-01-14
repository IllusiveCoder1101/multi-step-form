import React from 'react'
import Sidebar_Style1 from './Sidebar_Style1'
import Sidebar_Style2 from './Sidebar_Style2'
import { useGlobalContext } from './Context'

function Sidebar_1() {
  const {size}=useGlobalContext()
  return (
    
        (size>540)?
        <aside className='sidebar_desktop'>
          <Sidebar_Style1 number="1" name="STEP 1" nickName="YOUR INFO"/>
          <Sidebar_Style1 number="2" name="STEP 2" nickName="SELECT PLAN"/>
          <Sidebar_Style1 number="3" name="STEP 3" nickName="ADD ONS"/>
          <Sidebar_Style1 number="4" name="STEP 4" nickName="SUMMARY"/>
        </aside>:
        <aside className='sidebar_mobile'>
          <Sidebar_Style2 number="1"/>
          <Sidebar_Style2 number="2"/>
          <Sidebar_Style2 number="3"/>
          <Sidebar_Style2 number="4"/>
        </aside>
        
 
  )
}

export default Sidebar_1