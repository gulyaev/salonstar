import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		dialogsData: state.dialogsPage.dialogsData,
		messagesData: state.dialogsPage.messagesData,
		newMessageText: state.dialogsPage.newMessageText,
		//isAuth: state.auth.isAuth
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: ()=>{dispatch(addMessageActionCreator());},
		onMessageChange: (text)=>{dispatch(onMessageChangeActionCreator(text));}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;