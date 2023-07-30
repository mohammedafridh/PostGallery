import React, { useState, useEffect } from 'react'
import BaseLayout from '../layouts/BaseLayout'
import { viewAllPosts } from '../slices/PostSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, selectUsers, viewUser, viewUsers } from '../slices/UserSlice'
import { selectPost } from '../slices/PostSlice';
import {formatDistanceToNow} from 'date-fns'

const Homepage = () => {

  const [likedStatus, setLikedStatus] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const users = useSelector(selectUsers)
  const posts = useSelector(selectPost)
  console.log(user)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/posts/', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${user.token}` }
        });

        if (!response.ok) {
          const json = await response.json();
          setError(json.error);
        } else {
          const json = await response.json();
          dispatch(viewAllPosts(json));
        }
      } catch (error) {
        setError('Error fetching posts.');
      }
    };

    fetchPosts();
  }, []); // Add 'user' as a dependency

  useEffect(() => {
    const fetchUser = async () => {
      console.log('A')
      const response = await fetch('/users/allUsers', {
        method: 'GET',
        // headers: { 'Authorization': `Bearer ${user.token}` }
      })

      const json = await response.json()
      console.log(json)

      if (!response.ok) {
        setError(json.error)
      } if (response.ok) {
        dispatch(viewUsers(json))
      }
    }

    fetchUser()
  }, [])

  const getName = (userId) => {
    // console.log({users})
    const user = users.find((user) => user._id === userId);
    return user ? user.name : 'Unknown User';
  };

  return (
    <BaseLayout>
      <div className="homepageContainer">
        <h1>All Posts</h1>

        <div className="contentsWrapper">
          {posts && posts.map((post) => (
            <div className="homepageContents" key={post._id}>
              {post.image &&
                <img src={post.image} alt='' />}
              <div className="allDetails">
                <div className="detailsContainer">
                  <span>{getName(post.userId)}</span>
                  <span>{post.description}</span>
                </div>

                <div className="likesContainer">
                  <div className="likes">
                    <button onClick={() => setLikedStatus((prev) => !prev)}
                      className={likedStatus ? 'likedButton' : 'unlikedButton'}>{likedStatus ? 'Unlike' : 'Like'}</button>
                    <span>{post.likes.length} likes</span>
                  </div>
                  <span>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  )
}

export default Homepage