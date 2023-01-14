import React from 'react'
import { useGlobalContext } from './Context'
function Info_1() {
  const {size,validateDetailsEmail,validateDetailsName,validateDetailsPhone,info,tempinfo}=useGlobalContext()
  return (
    <form className={(size<540)?'main_mobile':"main_desktop"}>
        <h1 className="heading1">Personal info</h1>
        <p className='subheading1' >Please provide your name, email address and phone number.</p>
        <div className="titles">
          <h2 className='title_heading_1'>Name</h2>
          {(!tempinfo.name)?<p className='display_error'>*This is a Required Field</p>:null}
        </div>
        <input type="text" value={tempinfo.name || undefined} className="input_type_1"  placeholder='e.g. Stephen King'   onChange={(e)=>{validateDetailsName(e.target.value)}}/>
        <div className="titles">
          <h2 className='title_heading_1'>Email Address</h2>
          {(!tempinfo.email || !info.email)?<p className='display_error'>*This is a Required Field</p>:null}
        </div>
        <input type="email" value={tempinfo.email || undefined} className="input_type_1"  placeholder='e.g. stephenking@lorem.com'  onChange={(e)=>{validateDetailsEmail(e.target.value)}} />
        <div className="titles">
          <h2 className='title_heading_1'>Phone Number</h2>
          {(!tempinfo.phone || !info.phone)?<p className='display_error'>*This is a Required Field</p>:null}
        </div>
        <input type="tel" className="input_type_1" value={tempinfo.phone || undefined}  placeholder="e.g. 1234567890"  onChange={(e)=>{validateDetailsPhone(e.target.value)}}/>
    </form>
  )
}

export default Info_1