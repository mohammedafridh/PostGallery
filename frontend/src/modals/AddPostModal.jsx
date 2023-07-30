import React, { useState } from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import FileBase from 'react-file-base64'
import { createPost } from '../slices/PostSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../slices/UserSlice';

const AddPostModal = ({ modalOpened, setModalOpened }) => {

    const theme = useMantineTheme();
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState('')
    const [profileKey, setProfileKey] = useState(Date.now())
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const postImageHandler = () => {
        setImage(null)
        setProfileKey(Date.now())
    }

    const createPostHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        // console.log('token is', user.token)
        const post = { image, description }
        console.log(post)

        const response = await fetch('/posts/createPost', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        console.log(json)

        if (!response.ok) {
            setError(json.error)
            setLoading(false)
        } if (response.ok) {
            console.log(json.image)
            dispatch(createPost(json))
            setLoading(false)
            setModalOpened(false)
            setImage(null)
            setProfileKey(Date.now())
        }

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

            <form onSubmit={createPostHandler} className="addPostForm">

                <h1>Create Post</h1>
                <textarea placeholder='Description' onChange={(e) => setDescription(e.target.value)}></textarea>

                <div className="postImage">
                    <label>Image</label>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                        setImage(base64)
                        }
                        key={profileKey}
                    />
                </div>
                {image &&
                    <div className="imageDisplay">
                        <img src={image} alt='' />
                        <button onClick={postImageHandler} className='closeBtn'>x</button>
                    </div>
                }

                <button type='submit' className='button'>Create Post</button>
            </form>
        </Modal>
    )
}

export default AddPostModal