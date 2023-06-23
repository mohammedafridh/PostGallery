import { useAuthContext } from "../contexts/UserAuthContext"

const useLogout = ()=>{

    const {dispatch} = useAuthContext()

    const logout = ()=>{
        localStorage.removeItem('user')
        dispatch({type:'Logout'})
    }
    return {logout}
}

export default useLogout