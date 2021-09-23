const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAdmin: null,
  isAuth: false
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data
      };
    }
    default:
      return state;
  }
}

//export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data : {userId, email, login, isAuth} });
export const setAuthUserData = (userId, email, login, isAdmin) => ({type: SET_USER_DATA, data : {userId, email, login, isAdmin} });

export default authReducer;