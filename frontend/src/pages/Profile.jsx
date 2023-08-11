import React,{useState} from 'react'
import BaseLayout from '../layouts/BaseLayout'
import UpdateProfileModel from '../modals/UpdateProfileModel'
import { useSelector } from 'react-redux'
import { selectUser } from '../slices/UserSlice'

const Profile = () => {

    const[modalOpened,setModalOpened] = useState(false)
    const users = useSelector(selectUser)
    console.log(users)

  return (
    <BaseLayout>
        <div className="profile">
            <div className="profileForm">
                <h1>Welcome!</h1>

            {users.user.image?
                <img src = {users.user.image} alt = '' /> : <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Xdf9OyXn9BpWL30gb6cpyLnkiCCbSaH8wVB1007o9WpYBDgb6J1_afDQTdJuqwgE3xM&usqp=CAU' alt = '' /> }

                <div className="details">
                    <span>Name</span>
                    <span>{users.user.name}</span>
                </div>

                <div className="details">
                    <span>Username</span>
                    <span>{users.user.username}</span>
                </div>

                <div className="details">
                    <span>Password</span>
                    <span>***************</span>
                </div>

                <button className='button profileUpdateBtn'
                onClick={()=>setModalOpened(true)}
                >Update Details</button>

                <UpdateProfileModel 
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
                />
            </div>
        </div>
    </BaseLayout>

  )
}

export default Profile