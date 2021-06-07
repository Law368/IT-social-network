import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return <div className={`${s.dialog} ${s.active}`}>
    <NavLink to={path}>{props.name}</NavLink>
            </div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                   <DialogItem name="User 1" id="1"/>
                   <DialogItem name="User 2" id="2"/>
                   <DialogItem name="User 3" id="3"/>
                   <DialogItem name="User 4" id="4"/>
                   <DialogItem name="User 5" id="5"/>
                   <DialogItem name="User 6" id="6"/>
                </div>
                <div className={s.messages}>
                    <Message message="Hi"/>
                    <Message message="Test"/>
                    <Message message="111"/>
                </div>
        </div>
    )
}

export default Dialogs;