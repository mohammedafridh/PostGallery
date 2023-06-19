import React from 'react'
import logo from '../../images/logo3.png'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <form className="loginForm">
                    <div className="loginImage">
                        <img src={logo} alt='' />
                        <span>POST GALLERY LOGIN</span>
                    </div>

                    <div className="loginDetails">
                        <input 
                            type = 'text'
                            placeholder='Username'
                        />
                    </div>

                    <div className="loginDetails">
                        <input 
                            type = 'password'
                            placeholder='Password'
                        />
                    </div>

                    <button className='button'>Login</button>

                    <span>No Account?
                    <Link to = '/signup' className='signUpLink'>Register</Link></span>

                </form>
            </div>
        </div>
    )
}

export default Login