import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import {
    Home,
    Feed
} from "@mui/icons-material";
import AddPostModal from '../modals/AddPostModal';
import Logo from '../images/logo2.png'

const SideBar = () => {

    const [modalOpened, setModalOpened] = useState(false)
    const navigate = useNavigate()

    const profileHandler = ()=>{
        navigate('/profile')
    }

    const logoutHandler = ()=>{
        navigate('/')
    }

    return (
        <div className="sidebarContainer">
            <div className="sideBarWrapper">
                <div className="sideBarItems">

                <div className="logoContainer">
                    <img src = {Logo} alt = '' />
                    {/* <span>Post Gallery</span> */}
                </div>

                    <div className="sidebarImgContainer">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Xdf9OyXn9BpWL30gb6cpyLnkiCCbSaH8wVB1007o9WpYBDgb6J1_afDQTdJuqwgE3xM&usqp=CAU' alt='img' />
                        <button onClick={profileHandler}>Profile</button>
                        <button onClick={() => setModalOpened(true)}>Create Post</button>
                        <AddPostModal
                            modalOpened={modalOpened}
                            setModalOpened={setModalOpened}
                        />
                    </div>
                    <div className="menus">
                        <ul>
                            <NavLink to = '/home' className='menuItem menuItemActive'><Home />Home</NavLink>
                            <NavLink to = '/myPosts' className='menuItem'><Feed />My Posts</NavLink>
                        </ul>
                    </div>
                </div>

                <div className="logout">
                    <button onClick={logoutHandler}>Log Out</button>
                </div>

            </div>

            <div className="footer">
                <p>&copy; 2023 Post Gallery.</p>
            </div>
        </div>
    )
}

export default SideBar