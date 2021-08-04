const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';


let initialState = {
    usersData: [],
    pageSize: 2,
    totalUsersCount: 0,
    currentPage: 1
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
            return { ...state, usersData: action.users }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalCount }
        }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageActionCreator = (pageNumber)=>({ type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCountActionCreator = (totalCount)=>({ type: SET_TOTAL_USERS_COUNT, totalCount});

export default usersReducer;