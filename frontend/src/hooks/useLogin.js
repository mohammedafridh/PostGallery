import { useState } from "react"
// import { useAuthContext } from "../contexts/UserAuthContext"
import { useDispatch } from 'react-redux'
import { login, selectUser } from "../slices/UserSlice"

const useLogin = ()=>{

    // const{dispatch} =useAuthContext()
    const[error,setError] = useState(null)
    const[loading,setLoading] = useState(null)
    const dispatch = useDispatch()

    const loginUser = async(username,password)=>{
        setError(null)
        setLoading(true)
        const response = await fetch('/users/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({username,password})
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setLoading(false)
        }

        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))
            dispatch(login(json),{loggedIn:true})
            setLoading(false)
        }
    }

    return{loginUser,error,loading}

}

export default useLogin