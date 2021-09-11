const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  postData: [
    { id: 1, message: 'Hi! How are you?', likesCount: 18 },
    { id: 2, message: 'It is my first post', likesCount: 35 }
  ],
  newPostText: '',
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 53
      };
      let stateCopy = {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ''
      };
      return stateCopy;
    }
    case ON_POST_CHANGE: {
      let stateCopy = {
        ...state,
        newPostText: action.newText
      };
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }

    default:
      return state;
  }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const onPostChangeActionCreator = (text) => ({ type: ON_POST_CHANGE, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;