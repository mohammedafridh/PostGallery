import React, { useState } from 'react'
import BaseLayout from '../layouts/BaseLayout'
import MyPostEditModel from '../modals/MyPostEditModel'

const MyPosts = () => {

    const [modalOpened, setModalOpened] = useState(false)

    return (
        <BaseLayout>
            <div className="myPosts">
                <h1>My Posts</h1>
                <div className="myPostsContainer">
                    <div className="posts">
                        <img src='data:image/jpeg;base64,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' alt='' />

                        <span>Description idfbvhdfj ndfs fh f fewr fuiwef
                            ef ihwebfi erfjkr kff f rwe eptqd5eh5Cczqbmi fLeoiDdHOcucu ysMPVqR2HmZJ9gTtnRp0FA 9wkQkc7IUWcv6090pp fqPu7Sa8 iMlUbG4a5smqr JdelNbUHzPvg reg reg
                            drg dfg gd g rg ergh t hrt hbgfrf  trh rthtr hr
                        </span>

                        <div className="postActions">
                            <button className='button editBtn' onClick={() => setModalOpened(true)}>Edit</button>

                            <MyPostEditModel
                                modalOpened={modalOpened}
                                setModalOpened={setModalOpened}
                            />
                            <button className='button dltBtn'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default MyPosts