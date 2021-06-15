import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    
let dialogsElements =  props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );
let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

let newPostElement = React.createRef();

let addPost = () => {
  let text = newPostElement.current.value;
  alert('bbb');
}

    return (
        <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                { dialogsElements }
                </div>
                <div className={s.messages}>
                   {messagesElements}
                </div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
        </div>
    )
}

export default Dialogs;