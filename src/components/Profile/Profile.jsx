import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import s from './Profile.module.css';

const Profile = () => {

    let posts = [
        {id:1, message: "Do not worry", likesCount: 777},
        {id:2, message: "Keep working hard", likesCount: 333},
        {id:3, message: "Do it all", likesCount: 444},
        {id:4, message: "In due time", likesCount: 888},
    ]

    return (
    <div>
        <ProfileInfo />
        <MyPosts posts={posts}/>
    </div>
    )
}

export default Profile;