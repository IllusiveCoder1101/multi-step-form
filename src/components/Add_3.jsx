import React from 'react'
import Add_ui from './Add_ui'
import { useGlobalContext } from './Context'
import FetchData from './data'
function Add_3() {
  const {size,yearly}=useGlobalContext()
  return (
    <div className={(size<540)?'main3_mobile':"main3_desktop"}>
        <h1 className="heading1">Pick add-ons</h1>
        <p className="subheading1">Add-ons help enhance your gaming experience.</p>
        <section className="add">
            <Add_ui service="Online service" desc="Access to multiplayer games" money={`+$${FetchData(3)}/${(yearly)?"year":"mo"}`} number="1"/>
            <Add_ui service="Larger storage" desc="Extra 1TB of cloud save" money={`+$${FetchData(4)}/${(yearly)?"year":"mo"}`} number="2"/>
            <Add_ui service="Customizable profile" desc="Custom theme on your profile" money={`+$${FetchData(5)}/${(yearly)?"year":"mo"}`} number="3"/>
        </section>
    </div>
  )
}

export default Add_3