const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

let initialState = {
    usersData: [],
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 4
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            };
        }
        case SET_USERS: {
            return { ...state, usersData: [...state.usersData, ...action.users] }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}
        }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageActionCreator = (pageNumber)=>({ type: SET_CURRENT_PAGE, pageNumber});

export default usersReducer;