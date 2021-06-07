import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'Hi, How are you', likesCount: 12},
    {id: 2, message: 'First post', likesCount: 11},
    {id: 3, message: '111', likesCount: 20},
    {id: 4, message: '2222', likesCount: 35},
    {id: 5, message: '3333', likesCount: 33},
    {id: 6, message: '44444', likesCount: 27}
]

let postsElements = posts.map( p => <Post message={p.message} likes={p.likesCount}/>);

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
                   { postsElements }
                </div>
            </div>
  )
}

export default MyPosts;