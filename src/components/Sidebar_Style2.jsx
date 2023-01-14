import React from 'react'
import { useGlobalContext } from './Context'
function Sidebar_Style2(info) {
  const {page}=useGlobalContext()
  return (
    <section className="step_1">
        <div className={(page==info.number)?"Active":'step_no'}>{info.number}</div>
    </section>
  )
}

export default Sidebar_Style2