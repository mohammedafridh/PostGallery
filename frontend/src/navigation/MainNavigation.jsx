import React from 'react'
import './MainNavigation.css'
import { Link } from 'react-router-dom'

const MainNavigation = () => {
    return (
        <div className="mainNavigation">
            <div className="title">
                <h1 className='heading'>Post Gallery</h1>
            </div>

            <div className="navigations">
                <Link to="/">Home</Link>
                <Link to="">My Posts</Link>
                <Link to="">Profile</Link>
            </div>

            <div className="btn">
                <button>Log Out</button>
            </div>
        </div>
    )
}

export default MainNavigation