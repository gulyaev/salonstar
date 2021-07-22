export let store = {
  _callSubscriber () {
    console.log('state is changed - state изменен');
  },

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
    ]
  },

  getState () {
    return this._state;
  },

  addPost() {//в параметр передаем наш новый текст
    let newPost = {//формируем объект по образу и подобию объекта postsData
      id: 3,
      message: this._state.newPostText,
      likesCount: 53
    };

    this._state.postData.push(newPost);//добавляем новый объект в наш массив
    this._state.newPostText = '';
    this._callSubscriber(this._state);
  },

  onPostChange(newPostTex) {
    this._state.newPostText = newPostTex;
    this._callSubscriber(this._state);
  },

  //rerenderEntireTree(state),

  subscribe (observer) {
    this._callSubscriber = observer;
  }
}

export default store;