import { useDispatch, useSelector } from "react-redux"
import {logout} from '../slices/UserSlice'
import { selectPost, viewAllPosts } from "../slices/PostSlice"

const useLogout = ()=>{

    const dispatch = useDispatch()

    const logoutUser = ()=>{
        localStorage.removeItem('user')
        dispatch(logout())
        dispatch(viewAllPosts(null))
    }
    return {logoutUser}
}

export default useLogout