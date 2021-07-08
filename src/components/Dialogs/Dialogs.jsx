import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: "Iroh" },
        { id: 2, name: "Bang" },
        { id: 3, name: "Snow" },
        { id: 4, name: "Cloud" },
        { id: 5, name: "Tide" },
    ]

    let messages = [
        { id: 1, message: "Study" },
        { id: 2, message: "for" },
        { id: 3, message: "the" },
        { id: 4, message: "Future" },
        { id: 5, message: "of yours" },
    ]

    let dialogsElements = dialogs.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    });

    let messagesElements = messages.map(message => {
        return <Message message={message.message} />
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;