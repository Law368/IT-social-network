import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {

    let postsData = [
      {id:1, message: "Do not worry", likesCount: 777},
      {id:2, message: "Keep working hard", likesCount: 333},
    ]

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                      <textarea></textarea>
                    </div>
                    <div>
                      <button>Add post</button>
                    </div>
                </div>
        
                <div className={s.posts}>
                   <Post message={postsData[0].message} likes={postsData[0].likesCount}/>
                   <Post message={postsData[1].message} likes={postsData[1].likesCount}/>
                </div>
            </div>
  )
}

export default MyPosts;