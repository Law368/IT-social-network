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
    {
        id: 1,
        name: 'User 1'
    },
    {
        id: 2,
        name: 'User 2'
    },
    {
        id: 3,
        name: 'User 3'
    },
    {
        id: 4,
        name: 'User 4'
    },
    {
        id: 5,
        name: 'User 5'
    },
    {
        id: 6,
        name: 'User 6'
    }
]

let messagesData = [
    {
        id: 1,
        message: 'Hi'
    },
    {
        id: 2,
        message: 'Test'
    },
    {
        id: 3,
        message: '111'
    },
    {
        id: 4,
        message: '2222'
    },
    {
        id: 5,
        message: '3333'
    },
    {
        id: 6,
        message: '44444'
    }
]
    return (
        <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                   <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                   <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                   <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                   <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                   <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                   <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                </div>
                <div className={s.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                </div>
        </div>
    )
}

export default Dialogs;