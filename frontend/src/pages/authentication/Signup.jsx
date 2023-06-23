import React, { useState } from 'react'
import logo from '../../images/logo3.png'
import { Link } from 'react-router-dom'
import FileBase from 'react-file-base64'
import useSignup from '../../hooks/useSignup'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const [profileImage, setProfileImage] = useState(null)
    const [profileKey, setProfileKey] = useState(Date.now())
    const[name,setName]=useState('')
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const{loading,error,signup}=useSignup()
    const[isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()

    const profileHandler = ()=>{
        setProfileImage(null)
        setProfileKey(Date.now())
    }

    const signupHandler = async(e)=>{
        setIsLoading(true)
        e.preventDefault()
        await signup(name,profileImage,username,password)
        // navigate('/home')
        setIsLoading(false)
    }

    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <form className="loginForm" onSubmit={signupHandler}>
                    <div className="loginImage">
                        <img src={logo} alt='' />
                        <span>POST GALLERY REGISTER</span>
                    </div>

                    <div className="loginDetails">
                        <input
                            type='text'
                            placeholder='Name'
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>

                    <div className="loginDetails">
                        <input
                            type='text'
                            placeholder='Username'
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                    </div>

                    <div className="loginDetails">
                        <input
                            type='password'
                            placeholder='Password'
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>

                    <div className="loginDetails">
                        <FileBase
                            type="file"
                            multiple={false}
                            className="postImg"
                            onDone={({ base64 }) =>
                                setProfileImage(base64)
                            }
                            key={profileKey}
                        />
                    </div>

                    {profileImage &&
                        <div className="propicContainer">
                            <img src = {profileImage} alt = '' />
                            <button onClick={profileHandler}>x</button>
                        </div>
                    }

                    <button type = 'submit' className='button'>Register</button>

                    <span>Have an Account?
                        <Link to='/' className='signUpLink'>Login</Link></span>

                </form>
            </div>
        </div>
    )
}

export default Signup