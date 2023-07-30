import React, { useState,useEffect } from 'react';
import logo from '../../images/logo3.png';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const [image, setImage] = useState(null);
    const [profileKey, setProfileKey] = useState(Date.now());
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { signupUser, error } = useSignup();

    const profileHandler = () => {
        setImage(null);
        setProfileKey(Date.now());
    };

    const signupHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await signupUser(name, image, username, password);
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

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
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="loginDetails">
                        <input
                            type='text'
                            placeholder='Username'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="loginDetails">
                        <input
                            type='password'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="loginDetails">
                        <FileBase
                            type="file"
                            multiple={false}
                            className="postImg"
                            onDone={({ base64 }) =>
                                setImage(base64)
                            }
                            key={profileKey}
                        />
                    </div>

                    {image &&
                        <div className="propicContainer">
                            <img src={image} alt='' />
                            <button onClick={profileHandler}>x</button>
                        </div>
                    }

                    <button type='submit' className='button'>Register</button>

                    <span>Have an Account?
                        <Link to='/' className='signUpLink'>Login</Link></span>

                </form>
            </div>
        </div>
    )
}

export default Signup