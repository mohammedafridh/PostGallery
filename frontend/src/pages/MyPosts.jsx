import React, { useState,useEffect } from 'react'
import BaseLayout from '../layouts/BaseLayout'
import MyPostEditModel from '../modals/MyPostEditModel'
import { selectUser } from '../slices/UserSlice'
import { useSelector,useDispatch } from 'react-redux'
import { deletePost, selectPost, viewAllPosts } from '../slices/PostSlice'

const MyPosts = () => {

    const [modalOpened, setModalOpened] = useState(false)
    const user = useSelector(selectUser)
    const posts = useSelector(selectPost)
    const[selectedPost,setSelectedPost] = useState({})
    const dispatch = useDispatch()
    const[error,setError] = useState(null)

    useEffect(()=>{
        const fetchMyPosts = async()=>{
            const response = await fetch('/posts/myposts',{
                method:'GET',
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            })

            const json = await response.json()

            if(response.ok){
                dispatch(viewAllPosts(json))
                console.log(posts)
            }
        }

        fetchMyPosts()
    },[])
    
    const editHandler = (post)=>{
        setModalOpened(true)
        setSelectedPost(post)
    }

    const dltHandler = async(postId)=>{
        const response = await fetch(`/posts/delete/${postId}`,{
            method:'DELETE',
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = response.json()

        if(!response.ok){
            setError(json.error)
        }if(response.ok){
            dispatch(deletePost(postId))
        }

    }

    return (
        <BaseLayout>
            <div className="myPosts">
                <h1>My Posts</h1>
                <div className="myPostsContainer">
                    {posts && posts.map((post)=>(
                    <div className="posts" key = {post._id}>
                        {post.image &&
                        <img src={post.image} alt='' />}

                        <span>{post.description}
                        </span>

                        <div className="postActions">
                            <button className='button editBtn' onClick={() => editHandler(post)}>Edit</button>

                            <MyPostEditModel
                                modalOpened={modalOpened}
                                setModalOpened={setModalOpened}
                                post = {selectedPost}
                            />
                            <button className='button dltBtn' onClick = {()=>dltHandler(post._id)}>Delete</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </BaseLayout>
    )
}

export default MyPosts