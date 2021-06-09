import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
    {id: 1, name: 'User 1'},
    {id: 2, name: 'User 2'},
    {id: 3, name: 'User 3'},
    {id: 4, name: 'User 4'},
    {id: 5, name: 'User 5'},
    {id: 6, name: 'User 6'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Test'},
    {id: 3, message: '111'},
    {id: 4, message: '2222'},
    {id: 5, message: '3333'},
    {id: 6, message: '44444'}
]
let dialogsElements =  dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );
let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                { dialogsElements }
                </div>
                <div className={s.messages}>
                   {messagesElements}
                </div>
        </div>
    )
}

export default Dialogs;