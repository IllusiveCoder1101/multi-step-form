import React from 'react'

const AppContext=React.createContext()
function AppProvider({children}) {
    const [page,setPage]=React.useState(1)
    const [plan,setPlan]=React.useState(1)
    const [checkList,setCheckList]=React.useState({"first":false,"second":false,"third":false})
    const [size,setSize]=React.useState(window.innerWidth)
    const [yearly,setYearly]=React.useState(false)
    const [info,setInfo]=React.useState({"name":"","email":"","phone":""})
    const Plans=["Arcade","Advanced","Pro"]
    const resize =()=>{
        setSize(window.innerWidth)
    }
    React.useEffect(()=>{
        window.addEventListener("resize",resize)
        return ()=>{
        window.removeEventListener("resize",resize)
        }
    })
    const validateDetailsName=(nm)=>{
        if(nm.length!==0)
            setInfo({...info,"name":nm})
        
        
       
    }
    const validateDetailsEmail=(em)=>{
        if(em.length!==0 && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(em))
            setInfo({...info,"email":em})
        
    }
    const validateDetailsPhone=(pn)=>{
        if(pn.length===10  && /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(pn) )
            setInfo({...info,"phone":pn})
        
    }
    const ActiveAddOn=(no)=>{
       const Active= ((checkList.first && no==="1") 
       || (checkList.second && no==="2") 
       || (checkList.third && no==="3"))?true:false

       return Active;
    }
    
    const Next=()=>{
        setPage(page+1)
    }
    const Previous=()=>{
        setPage(page-1)
    }
    const UpdateCheckList=(checked)=>{
        (checked=="1")?setCheckList({"first":!checkList.first,"second":checkList.second,"third":checkList.third})
        :(checked=="2")?setCheckList({"first":checkList.first,"second":!checkList.second,"third":checkList.third})
        :setCheckList({"first":checkList.first,"second":checkList.second,"third":!checkList.third})
    }
    return (
    <AppContext.Provider value={{page,Next,Previous,setPage,plan,setPlan,Plans,ActiveAddOn,
    checkList,UpdateCheckList,size,yearly,setYearly,info,validateDetailsEmail,validateDetailsName,
    validateDetailsPhone}}>
        {children}
    </AppContext.Provider>
  )
    
  
}

export const useGlobalContext=()=>{
    return React.useContext(AppContext)
}
export {AppContext,AppProvider}
