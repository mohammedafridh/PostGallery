import React, { useState } from 'react'
import BaseLayout from '../layouts/BaseLayout'

const Homepage = () => {

  const [likedStatus, setLikedStatus] = useState(false)

  return (
    <BaseLayout>
      <div className="homepageContainer">
        <h1>All Posts</h1>

        <div className="contentsWrapper">
          <div className="homepageContents">
            <img src='data:image/jpeg;base64,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' alt='' />

            <div className="allDetails">
              <div className="detailsContainer">
                <span>Name</span>
                <span>Description</span>
              </div>

              <div className="likesContainer">
                <div className="likes">
                  <button onClick={() => setLikedStatus((prev) => !prev)}
                    className={likedStatus ? 'likedButton' : 'unlikedButton'}>{likedStatus ? 'Unlike' : 'Like'}</button>
                  <span>1234</span>
                </div>
                <span>Posted Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Homepage