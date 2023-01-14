
import { useGlobalContext } from "./Context"
import React from "react"

const FetchData=(index)=>{
    const {yearly}=useGlobalContext()
    const Data={"monthly":[
        9,12,15,1,2,2
    ],"yearly":[
        90,120,150,10,20,20
    ]}
    if(yearly)
        return Data.yearly[index]
    else    
        return Data.monthly[index]
}
export default FetchData;
