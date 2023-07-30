import React, { useEffect, useState } from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import FileBase from 'react-file-base64'

const MyPostEditModel = ({ modalOpened, setModalOpened,post }) => {

    const theme = useMantineTheme();
    const [postImage, setPostImage] = useState(post.image)
    const [description,setDescription] = useState(post.description)
    const [profileKey,setProfileKey] = useState(Date.now())

    const postImageHandler = ()=>{
        setPostImage(null)
        setProfileKey(Date.now())
    }

    useEffect(()=>{
        setDescription(post.description)
    },[post])

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

                <h1>Edit Post</h1>
                <textarea placeholder='Description' value = {description}></textarea>

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

export default MyPostEditModel