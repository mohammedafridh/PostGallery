import React, { useState } from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import FileBase from 'react-file-base64'

const UpdateProfileModel = ({ modalOpened, setModalOpened }) => {

    const theme = useMantineTheme();
    const [postImage, setPostImage] = useState(null)
    const [profileKey,setProfileKey] = useState(Date.now())

    const postImageHandler = ()=>{
        setPostImage(null)
        setProfileKey(Date.now())
    }

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.40}
            overlayBlur={0.6}
            size='27%'
            opened={modalOpened}
            onClose={() => { setModalOpened(false) }}
        >

            <form action="" className="addPostForm">

                <h1>Update Profile</h1>

                <input type = 'text' placeholder='Username'/>

                <input type = 'password' placeholder='Password'/>

                <input type = 'text' placeholder='Name'/>

                <div className="postImage">
                    <label>Image</label>
                    <FileBase
                        type="file"
                        multiple={false}
                        className="postImg"
                        onDone={({ base64 }) =>
                            setPostImage(base64)
                        }
                        key={profileKey}
                    />
                </div>
                {postImage &&
                    <div className="imageDisplay">
                        <img src={postImage} alt='' />
                        <button onClick = {postImageHandler}>x</button>
                    </div>
                }

                <button className='button'>Save</button>
            </form>
        </Modal>
    )
}

export default UpdateProfileModel