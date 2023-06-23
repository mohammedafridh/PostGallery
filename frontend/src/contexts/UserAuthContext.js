import {useState, createContext, useContext, useReducer, useEffect} from 'react'

const AuthContext = createContext()

const authReducer = (state,action)=>{
    switch(action.type){
        case 'Login':
            return {user:action.payload}
        case 'Logout':
            return{user:null}
        default:
            return state
    }

}

export const AuthContextProvider = ({children})=>{

    const[state,dispatch] = useReducer(authReducer,{
        user:null
    })

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))

        if(user){
            dispatch({type:'Login', payload:user})
        }
    },[])

    console.log('Auth State',state)

    return(
        <AuthContext.Provider value = {{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = ()=>{
    return useContext(AuthContext)
}