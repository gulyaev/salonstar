const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_RESUME_DATA = 'SET-USER-RESUME-DATA';
const UPDATE_USER_PROFILE = 'UPDATE-USER-PROFILE';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
  postData: [
    { id: 1, message: 'Hi! How are you?', likesCount: 18 },
    { id: 2, message: 'It is my first post', likesCount: 35 }
  ],
  newPostText: '',
  profile: null,
  resume: null,
  followingInProgress: false
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
    case UPDATE_USER_PROFILE: {
      return {
        ...state,
        ...state.profile,
        followers: action.profile.followers,
        following: action.profile.following
      }
    }
    case SET_USER_RESUME_DATA: {
      return { ...state, resume: action.resumeData }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
      }
    }
    default:
      return state;
  }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const onPostChangeActionCreator = (text) => ({ type: ON_POST_CHANGE, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserResumeData = (resumeData) => ({ type: SET_USER_RESUME_DATA, resumeData });
export const updateUserProfile = (profile) => ({ type: UPDATE_USER_PROFILE, profile });
export const toggleFollowingProgress = (isFetching) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching });

export default profileReducer;