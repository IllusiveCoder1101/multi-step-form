import React from 'react'
import { useGlobalContext } from './Context'
function Sidebar_Style2(info) {
  const {page}=useGlobalContext()
  return (
    <section className="step_1">
        <h1 className={(page==info.number)?"Active":'step_no'}>{info.number}</h1>
    </section>
  )
}

export default Sidebar_Style2