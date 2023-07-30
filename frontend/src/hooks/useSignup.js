import {useState} from 'react'
// import { useAuthContext } from '../contexts/UserAuthContext'
import { useDispatch } from 'react-redux'
import {login} from '../slices/UserSlice'

const useSignup = ()=>{
    const[error,setError] = useState(null)
    const[loading,setLoading] = useState(null)
    const dispatch = useDispatch()

    const signupUser = async(name,image,username,password)=>{
        setError(null)
        setLoading(true)

        const response = await fetch('/users/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name,image,username,password})
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

    return{signupUser, error,loading}
}

export default useSignup