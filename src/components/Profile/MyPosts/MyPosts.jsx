import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
console.log(props);
  

let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likesCount}/>);

let newPostElement = React.createRef();

let addPost = () => {
  let text = newPostElement.current.value;
  alert('aaaa');
  
}

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                      <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                      <button onClick={ addPost }>Add post</button>
                    </div>
                </div>
        
                <div className={s.posts}>
                   { postsElements }
                </div>
            </div>
  )
}

export default MyPosts;