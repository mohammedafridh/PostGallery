import React, { useState } from 'react'
import logo from '../../images/logo3.png'
import { Link } from 'react-router-dom'
import FileBase from 'react-file-base64'

const Signup = () => {

    const [profileImage, setProfileImage] = useState(null)
    const [profileKey, setProfileKey] = useState(Date.now())

    const profileHandler = ()=>{
        setProfileImage(null)
        setProfileKey(Date.now())
    }

    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <form className="loginForm">
                    <div className="loginImage">
                        <img src={logo} alt='' />
                        <span>POST GALLERY REGISTER</span>
                    </div>

                    <div className="loginDetails">
                        <input
                            type='text'
                            placeholder='Name'
                        />
                    </div>

                    <div className="loginDetails">
                        <input
                            type='text'
                            placeholder='Username'
                        />
                    </div>

                    <div className="loginDetails">
                        <input
                            type='password'
                            placeholder='Password'
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

                    <button className='button'>Register</button>

                    <span>Have an Account?
                        <Link to='/' className='signUpLink'>Login</Link></span>

                </form>
            </div>
        </div>
    )
}

export default Signup