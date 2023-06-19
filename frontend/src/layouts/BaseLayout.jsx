import React from 'react'
import SideBar from './SideBar'

const BaseLayout = (props) => {
  return (
    <div className="baseLayout">
        <div className="navigator">
            <SideBar />
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
  )
}

export default BaseLayout