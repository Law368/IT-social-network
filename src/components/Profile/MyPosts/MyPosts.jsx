import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {updateNewPostText} from "../../../redux/state";
import { addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/state';



const MyPosts = (props) => {

  let postsElements = props.posts.map(post => {
    return <Post message={post.message} likes={post.likesCount} />
  })

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onChangePost = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={ newPostElement } onChange={ onChangePost } value={props.newPostText}/>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;