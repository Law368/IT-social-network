import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className='content'>
            <div>
            <img src='https://www.hydro.com/globalassets/08-about-hydro/hydro-worldwide/singapore.jpg?quality=85&width=1036&height=440&mode=crop&center=0.5,0.5' />
            </div>
            <div>
            <img src='https://i.imgur.com/rSofPqQ.jpg' />
            ava + description
            </div>
            <div>
                My posts
                <div>
                New post
                </div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>post 1</div>
                <div className={s.item}>post 2</div>
            </div>
        </div>
}

export default Profile;