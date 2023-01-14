import React from 'react'
import { useGlobalContext } from './Context'
function Info_1() {
  const {size,validateDetailsEmail,validateDetailsName,validateDetailsPhone,info}=useGlobalContext()
  return (
    <form className={(size<540)?'main_mobile':"main_desktop"}>
        <h1 className="heading1">Personal info</h1>
        <p className='subheading1' >Please provide your name, email address and phone number.</p>
        <h3 className='title_heading_1'>Name</h3>
        <input type="text" className="input_type_1"  placeholder='e.g. Stephen King'   onChange={(e)=>{validateDetailsName(e.target.value);window.localStorage.setItem("name",e.target.value)}}/>
        <h3 className='title_heading_1'>Email Address</h3>
        <input type="email" className="input_type_1"  placeholder='e.g. stephenking@lorem.com'  onChange={(e)=>{validateDetailsEmail(e.target.value);window.localStorage.setItem("email",e.target.value)}} />
        <h3 className='title_heading_1'>Phone Number</h3>
        <input type="tel" className="input_type_1"  placeholder="e.g. 1234567890"  onChange={(e)=>{validateDetailsPhone(e.target.value);window.localStorage.setItem("phone",e.target.value)}}/>
    </form>
  )
}

export default Info_1