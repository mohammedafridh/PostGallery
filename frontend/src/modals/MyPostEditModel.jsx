import React, { useEffect, useState } from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import FileBase from 'react-file-base64'
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../slices/UserSlice';
import { updatePost } from '../slices/PostSlice';

const MyPostEditModel = ({ modalOpened, setModalOpened, post }) => {

    const theme = useMantineTheme();
    const [postImage, setPostImage] = useState(post.image)
    const [description, setDescription] = useState(post.description)
    const [profileKey, setProfileKey] = useState(Date.now())
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const postImageHandler = () => {
        setPostImage(null)
        setProfileKey(Date.now())
    }

    useEffect(() => {
        setDescription(post.description)
        setPostImage(post.image)
    }, [post])

    const postEditHandler = async (e) => {
        e.preventDefault()
        setError(null)
        setLoading(true)
        const updatedPost = { postImage, description }
        const response = await fetch(`/posts/updateposts/${post._id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedPost),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setLoading(false)
        } if (response.ok) {
            dispatch(updatePost(json))
            setLoading(false)
            setError(null)
            setModalOpened(false)
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

            <form action="" className="addPostForm" onSubmit={postEditHandler}>

                <h1>Edit Post</h1>
                <textarea placeholder='Description'
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}>
                </textarea>

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
                        <button onClick={postImageHandler}>x</button>
                    </div>
                }

                <button className='button' type='submit'>Save</button>
            </form>
        </Modal>
    )
}

export default MyPostEditModel