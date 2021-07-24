const ADD_MESSAGE = 'ADD-MESSAGE';
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE';

let initialState = {
  dialogsData: [
    { id: 1, name: 'John', image: "../../images/ava1.jpeg" },
    { id: 2, name: 'Pall', image: "../../images/ava2.jpeg" },
    { id: 3, name: 'Jeff', image: "../../images/ava3.png" },
    { id: 4, name: 'Mike', image: "../../images/ava4.jpeg" },
    { id: 5, name: 'Alex', image: "../../images/ava5.jpeg" },
    { id: 6, name: 'Den', image: "../../images/ava6.jpeg" }
  ],
  messagesData: [
    { id: 1, name: 'John', message: 'Hi' },
    { id: 2, name: 'Pall', message: 'How are you?' },
    { id: 3, name: 'Jeff', message: 'Yo!' },
    { id: 4, name: 'Mike', message: 'Yo!' },
    { id: 5, name: 'Alex', message: 'Yo!' }
  ],
  newMessageText: ''
};

const dialogsReducer = (state=initialState, action) => {
  if (action.type === ADD_MESSAGE && state.newMessageText != '') {
    let newMessage = {
      id: 6,
      name: 'Lev Letto',
      message: state.newMessageText,
    };
    state.messagesData.push(newMessage);
    state.newMessageText = '';
  } else if (action.type === ON_MESSAGE_CHANGE) {
    state.newMessageText = action.newText;
  }

  return state;
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const onMessageChangeActionCreator = (text) => ({ type: ON_MESSAGE_CHANGE, newText: text });

export default dialogsReducer;