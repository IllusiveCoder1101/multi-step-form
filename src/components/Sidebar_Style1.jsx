import React from 'react'
import { useGlobalContext } from './Context'
function Sidebar_Style1(info) {
  const {page}=useGlobalContext()
  return (
    <section className="step_1">
        <h2 className={(page==info.number)?'Active':'step_no'}>{info.number}</h2>
        <section className="text">
            <p className='step_name'>{info.name}</p>
            <h2 className='step_nickName'>{info.nickName}</h2>
        </section>
    </section>
  )
}

export default Sidebar_Style1