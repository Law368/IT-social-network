import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {

    let posts = [
      {id:1, message: "Do not worry", likesCount: 777},
      {id:2, message: "Keep working hard", likesCount: 333},
      {id:3, message: "Do it all", likesCount: 444},
      {id:4, message: "In due time", likesCount: 888},
    ]

    let postsElements = posts.map( post => {
      return <Post message={post.message} likes={post.likesCount}/>
    })

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
                   {postsElements}
                </div>
            </div>
  )
}

export default MyPosts;