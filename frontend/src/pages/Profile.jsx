import React,{useState} from 'react'
import BaseLayout from '../layouts/BaseLayout'
import UpdateProfileModel from '../modals/UpdateProfileModel'

const Profile = () => {

    const[modalOpened,setModalOpened] = useState(false)

  return (
    <BaseLayout>
        <div className="profile">
            <div className="profileForm">
                <h1>Hi Afridh!</h1>

                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CvILgxYosg0DRIDIkbtx-2zRHF-l1TdB7M33__DJ94s71KZ4p9qXc9zuq8nyrk9Sf2c&usqp=CAU" alt = '' />

                <div className="details">
                    <span>Name</span>
                    <span>Afridh</span>
                </div>

                <div className="details">
                    <span>Username</span>
                    <span>Afridh123</span>
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