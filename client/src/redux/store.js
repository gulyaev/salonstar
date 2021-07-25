import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Hi! How are you?', likesCount: 18 },
        { id: 2, message: 'It is my first post', likesCount: 35 }
      ],
      newPostText: 'f',
    },

    dialogsPage: {
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
    }
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

  dispatсh(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const onPostChangeActionCreator = (text) => ({ type: 'ON-POST-CHANGE', newText: text });
export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export const onMessageChangeActionCreator = (text) => ({ type: 'ON-MESSAGE-CHANGE', newText: text });

export default store;
window.store = store;