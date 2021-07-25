import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/store';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.dispatch(onMessageChangeActionCreator(text));
    }
debugger;
    return (
        <Dialogs state={props.state} newMessageText={props.state.dialogsPage.newMessageText}
        onMessageChange={onMessageChange} addMessage={addMessage} 
        dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData}
        />
    )
}

export default DialogsContainer;