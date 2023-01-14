import React from 'react'
import { useGlobalContext } from './Context'

function Add_ui(info) {
  const {checkList,UpdateCheckList,ActiveAddOn}=useGlobalContext()
  return (
    <div className={(ActiveAddOn(info.number))?"ActiveAdd_on":"add_on"}>
      <div className={(ActiveAddOn(info.number))?"ActiveCheckMark":"checkmark"} 
        onClick={()=>UpdateCheckList(info.number)}>
        {(ActiveAddOn(info.number))?
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9">
        <path fill="none" stroke="#fff" strokeWidth="2" d="m1 4 3.433 3.433L10.866 1"/>
        </svg>:<></>}
      </div>
      <section className="text2">
        <h3 className="title_heading_1">{info.service}</h3>
        <p className='subheading1'>{info.desc}</p>
      </section>
      <p className="price_tag">{info.money}</p>
    </div>
  )
}
export default Add_ui