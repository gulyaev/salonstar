const ADD_POST = 'salonstar/profile/ADD-POST';
const ON_POST_CHANGE = 'salonstar/profile/ON-POST-CHANGE';
const SET_USER_PROFILE = 'salonstar/profile/SET-USER-PROFILE';
const SET_USER_RESUME_DATA = 'salonstar/profile/SET-USER-RESUME-DATA';
const UPDATE_USER_PROFILE = 'salonstar/profile/UPDATE-USER-PROFILE';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'salonstar/profile/TOGGLE-IS-FOLLOWING-PROGRESS';
const axios = require('axios').default;

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

export const getAndSetUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    //userId я возьму из параметров замыкания
    //console.log("userIdfromProfCont " + userId); //id из URI либо из Локалсторидж
    axios.get(`/api/profile/profile/` + userId)
      .then(res => {
        console.log('userProfileDataAxiosReducer', res.data);
        dispatch(setUserProfile(res.data));
      })
      .catch(err => {
        //Handle Error Here
        console.error(err);
      });
  }
}


export const getAuthorizedUserResumeThunkCreator = (token) => {
  //debugger;
  return (dispatch) => {
    axios.get('/api/profile/getprofileinfo', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        console.log('ResumeData', res.data);
        dispatch(setUserResumeData(res.data));
      })
      .catch(err => {
        //Handle Error Here
        console.error(err);
      });
  }
}

export const getUserResumeURLThunkCreator = (userId) => {
  debugger;
  return (dispatch) => {
    axios.get(`/api/profile/getprofileinfo/` + userId)
      .then(res => {
        console.log('ResumeData', res.data);
        dispatch(setUserResumeData(res.data));
      })
      .catch(err => {
        //Handle Error Here
        console.error(err);
      });
    debugger;
  }
}

export const updateUserResumeDataThunkCreator = (userId, profileAbout, profilePersonalInfo, profileInterests) => {
  //debugger;
  return (dispatch) => {
    axios.patch(`/api/profile/updateprofileinfo/` + userId,
      {
        "about": profileAbout,
        "personalinfo": profilePersonalInfo,
        "interests": profileInterests
      },
      {
        'Content-Type': 'application/json'
      })
      .then(res => {
        console.log('UpdatedResumeData', res.data);
      })
      .catch(err => {
        //Handle Error Here
        console.error(err);
      });
  }
}

export const postResumeThunkCreator = (request, { ...resumeForm }, authToken, message) => {
  return async (dispatch) => {
    const data = await request('/api/profile/generateprofileinfo', 'POST', { ...resumeForm },
      {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + authToken
      },
    );
    console.log('ResumeData', data);
    message(data.message);
  }
}

export default profileReducer;