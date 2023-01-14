import React from 'react'
import Plan_ui from './Plan_ui'
import ReactSwitch from 'react-switch'
import { useGlobalContext } from './Context'
import FetchData from "./data"
function Plan_2() {
  const {size,yearly,setYearly}=useGlobalContext()
  return (
    <main className={(size<540)?'main2_mobile':"main2_desktop"}>
      <h1 className="heading1">Select your plan</h1>
      <p className="subheading1">You have the option of monthly or yearly billing.</p>
      <section className="plans">
        <Plan_ui number="1" name="Arcade" price={`$${FetchData(0)}/${(yearly)?"year":"mo"}`}/>
        <Plan_ui number="2" name="Advanced" price={`$${FetchData(1)}/${(yearly)?"year":"mo"}`}/>
        <Plan_ui number="3" name="Pro" price={`$${FetchData(2)}/${(yearly)?"year":"mo"}`}/>
      </section>
      <section className="duration">
        <h3 className='title_heading_1'>Monthly</h3>
        <ReactSwitch 
          checked={yearly} 
          onChange={()=>setYearly(!yearly)} 
          onColor={"#02295a"} 
          offColor={"#02295a"} 
          checkedIcon={false} 
          uncheckedIcon={false} className="switch"  />

        <h3 className='title_heading_1'>Yearly</h3>
      </section>
    </main>
  )
}

export default Plan_2