import React,{useState} from 'react'
import logo from '../../images/logo3.png'
import {Link} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import useLogin from '../../hooks/useLogin'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const{login,error,loading} = useLogin()
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()

    const loginHandler = async(e)=>{
        e.preventDefault()
        await login(username,password)
        toast.success('Login Successful!')
    }

    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <form className="loginForm" onSubmit={loginHandler}>
                    <div className="loginImage">
                        <img src={logo} alt='' />
                        <span>POST GALLERY LOGIN</span>
                    </div>

                    <div className="loginDetails">
                        <input 
                            type = 'text'
                            placeholder='Username'
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                    </div>

                    <div className="loginDetails">
                        <input 
                            type = 'password'
                            placeholder='Password'
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>

                    <button type = 'submit' className='button'>Login</button>

                    <span>No Account?
                    <Link to = '/signup' className='signUpLink'>Register</Link></span>

                </form>
            </div>
        </div>
    )
}

export default Login