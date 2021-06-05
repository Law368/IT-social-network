import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://drscdn.500px.org/user_avatar/6700568/q%3D85_w%3D300_h%3D300/v2?webp=true&v=5&sig=2a45a78f2a45649cbda71e60a012ed05d08ce18b0629be9dcb283f0c9f7f4c49'/>
            {props.message}
            <div>
                <span>{props.likes} likes</span>
            </div>
        </div>
          
  )
}

export default Post;