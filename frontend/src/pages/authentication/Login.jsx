import React, { useEffect, useState } from 'react'
import logo from '../../images/logo3.png'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
import { useSelector } from 'react-redux'
import { selectUser } from '../../slices/UserSlice'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { loginUser, error, loading } = useLogin()
    const user = useSelector(selectUser)

    const loginHandler = async (e) => {
        e.preventDefault()
        await loginUser(username, password)
    }

    useEffect(()=>{
        if(error){
            toast.error(error)
        }
    },[error])

    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <form className="loginForm" onSubmit={loginHandler}>
                    <div className="loginImage">
                        <img src={logo} alt='' />
                        <span>POST GALLERY LOGIN</span>
                    </div>

                    {/* {error &&
                        <div className="errorContainer">
                            <span className='error'>{error}</span>
                        </div>
                    } */}


                    <div className="loginDetails">
                        <input
                            type='text'
                            placeholder='Username'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                    </div>

                    <div className="loginDetails">
                        <input
                            type='password'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <button type='submit' className='button'>Login</button>

                    <span>No Account?
                        <Link to='/signup' className='signUpLink'>Register</Link></span>

                </form>
            </div>
        </div>
    )
}

export default Login