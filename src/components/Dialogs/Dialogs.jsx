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

    let dialogsData = [
        { id: 1, name: "Iroh" },
        { id: 2, name: "Bang" },
        { id: 3, name: "Snow" },
        { id: 4, name: "Cloud" },
        { id: 5, name: "Tide" },
    ]

    let messagesData = [
        { id: 1, message: "Study" },
        { id: 2, message: "for" },
        { id: 3, message: "the" },
        { id: 4, message: "Future" },
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    )
}

export default Dialogs;