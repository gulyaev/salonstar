import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} />));
    let messagesElements = props.state.messagesData.map(message => (<Message name={message.name} message={message.message} id={message.id} />));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div><textarea value=""
                        onChange=""
                        placeholder='Enter your message'></textarea></div>
                    <div><button onClick="">Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;