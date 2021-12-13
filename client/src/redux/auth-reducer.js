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
      //debugger;
      return {
        ...state,
        ...action.data
      };
    }
    default:
      return state;
  }
}


export const setAuthUserData = (userId, email, login, isAdmin, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAdmin, isAuth } });

export const setAuthUserDataThunkCreator = (request, { ...form }, message, auth) => {
  return async (dispatch) => {
    const data = await request('/api/auth/register', 'POST', { ...form });
    console.log('RegisterDataThunkCreator', data);
    message(data.message);
    console.log('токен' + data.token + 'айди' + data.userId + 'майл' + data.userEmail + 'логин' + data.userLogin + ' админ' + data.currentUser + ' авторизован' + data.isAuth)
    auth.login(data.token, data.userId, data.userEmail, data.userLogin);
  }
}


export const setAuthUserDataLoginThunkCreator = (request, { ...form }, message, auth) => {
  return async (dispatch) => {
    const data = await request('/api/auth/login', 'POST', { ...form });
    console.log('LoginData', data);
    message(data.message);
    auth.login(data.token, data.userId, data.userEmail, data.userLogin);
  }
}



export default authReducer;