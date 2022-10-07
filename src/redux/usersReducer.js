const TOGGLE_FOLLOW_USER = 'TOGGLE_FOLLOW-USER';
const SHOW_MORE_USERS = 'SHOW-MORE-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';


let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}


export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW_USER, userId});
export const setUsers = (users) => ({type: SHOW_MORE_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING});


const UsersReducer = (state = initialState, action) => {
    switch (action.type){
        case SHOW_MORE_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case TOGGLE_FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, is_follow: !u.is_follow}
                    } else {
                        return u
                    }
                })
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            }
        default:
            return state
    }
}

export default UsersReducer;