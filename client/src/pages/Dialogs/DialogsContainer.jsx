import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		dialogsData: state.dialogsPage.dialogsData,
		messagesData: state.dialogsPage.messagesData,
		newMessageText: state.dialogsPage.newMessageText,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: ()=>{dispatch(addMessageActionCreator());},
		onMessageChange: (text)=>{dispatch(onMessageChangeActionCreator(text));}
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);