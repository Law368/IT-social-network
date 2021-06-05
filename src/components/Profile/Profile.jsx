import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (<div>
            <div>
            <img src='https://www.hydro.com/globalassets/08-about-hydro/hydro-worldwide/singapore.jpg?quality=85&width=1036&height=440&mode=crop&center=0.5,0.5' />
            </div>
            <div>
            <img src='https://i.imgur.com/rSofPqQ.jpg' />
            ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;