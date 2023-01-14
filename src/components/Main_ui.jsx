import React from 'react'
import Info_1 from './Info_1'
import Plan_2 from './Plan_2'
import Add_3 from './Add_3'
import Confirmation_4 from './Confirmation_4'
import Thanks_5 from './Thanks_5'
import { useGlobalContext } from './Context'

function Main_ui() {
    const {page,Next,Previous,size,info,plan}=useGlobalContext()
    return (
        <div className='main_ui'>
            {(page==1)?<Info_1/>:(page==2)?<Plan_2/>:(page==3)?<Add_3/>:(page==4)?<Confirmation_4/>:<Thanks_5/>}
            {(page<=4)?<div className={(size<540)?"btns_mobile":"btns_desktop"}>
            {(page>1)?<button className={(size<540)?"back_mobile":"back_desktop"} onClick={()=>Previous()}>Go Back</button>:<></>}
            <button disabled={((page==1 && info.email && info.phone && info.name) || (page==2 && plan) || (page==3) || (page==4))?false:true} className={(size<540)?(page==4)?"confirm_mobile":"next_mobile":(page==4)?"confirm_desktop":"next_desktop"} onClick={()=>Next()}>{(page==4)?"Confirm":"Next Step"}</button>
            </div>:<></>}
        </div>
    )
}

export default Main_ui