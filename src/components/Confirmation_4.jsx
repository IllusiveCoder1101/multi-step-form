import React from 'react'
import FinalAddOn from './FinalAddOn'
import FetchData from './data'
import { useGlobalContext } from './Context'
function Confirmation_4() {
  const {size,yearly,Plans,plan,setPage}=useGlobalContext()
  const addons=FinalAddOn()
  let total=0
  return (
    <div className={(size<540)?'main4_mobile':"main4_desktop"}>
       <h1 className="heading1">Finishing up</h1>
       <p className="subheading1">Double-check everything looks Ok before confirming.</p>
       <section className="bill"> 
            <div className="item_1">
                <div className="item_desc">
                    <h3 className="title_heading_1">{`${Plans[plan-1]}(${(yearly)?"Yearly":"Monthly"})`}</h3>
                    <button className="change" onClick={()=>setPage(2)}>Change</button>
                </div>
                <p className="price_tag">{`$${FetchData(plan)}/${(yearly)?"year":"mo"}`}</p>
            </div>
            <hr />
            {addons.map((item)=>{
              total=total+item[1]
              return (
                <div className="item_1" key={item[0]}>
                  <p className="subheading1">{item[0]}</p>
                  <p className="price_tag">{`+$${item[1]}/${(yearly)?"year":"mo"}`}</p>
                </div>
              )
            })}
           
       </section> 
       <div className="total">
            <p className="sum">{`Total (per ${(yearly)?"year":"month"})`}</p>
            <h2 className="finalprice">{`+$${total+FetchData(plan)}/${(yearly)?"year":"mo"}`}</h2>
       </div>
    </div>
  )
}
export default Confirmation_4