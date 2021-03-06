import React, { useEffect, useContext } from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Loader from '../../components/Loader';

const Dialogs = (props) => {
    const auth = useContext(AuthContext);

    //debugger;
    let dialogsElements = props.state.dialogsPage.dialogsData.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} image={dialog.image}/>));
    let messagesElements = props.state.dialogsPage.messagesData.map(message => (<Message name={message.name} message={message.message} id={message.id} />));

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
        newMessageElement.current.value='';
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    }
    //alert(props.isAuth);
    //if (!props.isAuth) return <Redirect to={'/login'}/>;
    useEffect(async() => {
        if (!auth.ready) {
            return <Loader />
        }
    })
    
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