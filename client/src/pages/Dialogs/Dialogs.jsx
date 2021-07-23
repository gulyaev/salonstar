import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/state';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} image={dialog.image}/>));
    let messagesElements = props.state.messagesData.map(message => (<Message name={message.name} message={message.message} id={message.id} />));

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
        newMessageElement.current.value='';
    }

    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(onMessageChangeActionCreator(text));
    }

    return (
        <>
            <div class="col s4">
                <ul className="collection">
                    {dialogsElements}
                </ul>
            </div>
            <div class="col s8">
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.messageTextArea}>
                    <div class="input-field col s12">
                                    <textarea onChange={onMessageChange} ref={newMessageElement} id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Введите сообщение</label>
                                </div>
                        <div>
                            <button onClick={addMessage} class="btn waves-effect waves-light" type="submit" name="action">Отправить
                        <i class="material-icons right">send</i>
                    </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dialogs;