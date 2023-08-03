import { useEffect, useState, createContext } from "react"


const AppContext = createContext("")

export const AppProvider = props =>{
    const {children} = props
    const [userDetails, setuserDetails] = useState('')
    const saveUserData= () =>{
        const details = localStorage.getItem('userDetails')
        if(details){
            setuserDetails(JSON.parse(details))
        }
    }
    useEffect(()=>{
        saveUserData()
    },[])
    return (
        <AppContext.Provider value={{userDetails}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext