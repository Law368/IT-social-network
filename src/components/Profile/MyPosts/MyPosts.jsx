import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
        
                <div className={s.posts}>
                   <Post message='Hi, How are you' likes='30'/>
                   <Post message='First post' likes='20'/>
                </div>
            </div>
  )
}

export default MyPosts;