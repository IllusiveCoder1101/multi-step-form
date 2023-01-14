import React from 'react'
import { useGlobalContext } from './Context'
import FetchData from './data'
function FinalAddOn() {
  const {checkList}=useGlobalContext()
  const FinalAddOn=[]
  if(checkList.first)
    FinalAddOn.push(["Online service",FetchData(3)])
  if(checkList.second)
    FinalAddOn.push(["Larger storage",FetchData(4)])
  if(checkList.third)
    FinalAddOn.push(["Customizable profile",FetchData(5)])

  return FinalAddOn
}

export default FinalAddOn