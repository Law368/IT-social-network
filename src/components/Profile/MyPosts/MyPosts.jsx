import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
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
                   <Post message='Hi, How are you' likes='30'/>
                   <Post message='First post' likes='20'/>
                </div>
            </div>
  )
}

export default MyPosts;