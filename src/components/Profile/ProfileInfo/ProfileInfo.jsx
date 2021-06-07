import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
    <div>
        <div>
        <img src='https://www.hydro.com/globalassets/08-about-hydro/hydro-worldwide/singapore.jpg?quality=85&width=1036&height=440&mode=crop&center=0.5,0.5' />
        </div>
        <div className={s.descriptionBlock}>
        <img src='https://i.imgur.com/rSofPqQ.jpg' />
        ava + description
        </div>
    </div>
    )
}

export default ProfileInfo;