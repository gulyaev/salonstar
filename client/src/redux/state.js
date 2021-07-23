import { STATES } from "mongoose";

const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE';

export let store = {
  _state: {
    postData: [
      { id: 1, message: 'Hi! How are you?', likesCount: 18 },
      { id: 2, message: 'It is my first post', likesCount: 35 }
    ],
    newPostText: '',
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
    newMessageText: '',
  },

  _callSubscriber() {
    console.log('state is changed - state изменен');
    //alert('state is changed'+state);
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispath (action) {
    if (action.type === ADD_POST && this._state.newPostText!='') {
      let newPost = {
          id: 3,
          message: this._state.newPostText,
          likesCount: 53
      };
      this._state.postData.push(newPost);
      this._state.newPostText = '';
      this._callSubscriber(this._state);
  } else if (action.type === ON_POST_CHANGE) {
    this._state.newPostText = action.newText;
    this._callSubscriber(this._state);
  } else if (action.type === ADD_MESSAGE && this._state.newMessageText!='') {
      let newMessage = {
        id: 6,
        name: 'Lev Letto',
        message: this._state.newMessageText,
      };
      this._state.messagesData.push(newMessage);
      this._state.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === ON_MESSAGE_CHANGE) {
      this._state.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
    this._callSubscriber(this._state);
  }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const onPostChangeActionCreator = (text) => ({ type: 'ON-POST-CHANGE', newText: text });
export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export const onMessageChangeActionCreator = (text) => ({ type: 'ON-MESSAGE-CHANGE', newText: text });

export default store;
window.store = store;