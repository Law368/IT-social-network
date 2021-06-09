import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import s from './Profile.module.css';

let posts = [
    {id: 1, message: 'Hi, How are you', likesCount: 12},
    {id: 2, message: 'First post', likesCount: 11},
    {id: 3, message: '111', likesCount: 20},
    {id: 4, message: '2222', likesCount: 35},
    {id: 5, message: '3333', likesCount: 33},
    {id: 6, message: '44444', likesCount: 27}
]

const Profile = () => {
    return (
    <div>
        <ProfileInfo />
        <MyPosts posts={posts}/>
    </div>
    )
}

export default Profile;