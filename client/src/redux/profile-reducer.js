const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';

let initialState = {
  postData: [
    { id: 1, message: 'Hi! How are you?', likesCount: 18 },
    { id: 2, message: 'It is my first post', likesCount: 35 }
  ],
  newPostText: ''
};

const profileReducer = (state=initialState, action) => {
  if (action.type === ADD_POST && state.newPostText != '') {
    let newPost = {
      id: 3,
      message: state.newPostText,
      likesCount: 53
    };
    state.postData.push(newPost);
    state.newPostText = '';
  } else if (action.type === ON_POST_CHANGE) {
    state.newPostText = action.newText;
  }

  return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: ON_POST_CHANGE, newText: text});

export default profileReducer;