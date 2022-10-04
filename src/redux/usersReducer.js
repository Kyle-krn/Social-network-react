const TOGGLE_FOLLOW_USER = 'TOGGLE_FOLLOW-USER';
const SHOW_MORE_USERS = 'SHOW-MORE-USERS';


let initialState = {users: 
                    [
                        {id: 1, 
                         is_follow: false,
                         name : {
                           first: 'Dmitry', 
                           last: 'Koval'
                         },
                         place: {
                           country: 'Russia',
                           city: 'Moscow'
                         },
                         status: 'It\'s about me',
                         male: true
                         },
                         {id: 2, 
                           is_follow: true,
                           name : {
                             first: 'Mila', 
                             last: 'Love'
                           },
                           place: {
                             country: 'Russia',
                             city: 'Anapa'
                           },
                           status: 'It\'s about me',
                           male: false
                           },
                         {id: 3, 
                           is_follow: false,
                           name : {
                             first: 'Viltorya', 
                             last: 'Paple'
                           },
                           place: {
                             country: 'Russia',
                             city: 'Krasnodar'
                           },
                           status: 'It\'s about me',
                           male: false
                           }
                    ]
                   }


export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW_USER, userId: userId})
export const showMoreUsersAC = () => ({type: SHOW_MORE_USERS, users:                     [
  {id: 1, 
   is_follow: false,
   name : {
     first: 'Dmitry', 
     last: 'Koval'
   },
   place: {
     country: 'Russia',
     city: 'Moscow'
   },
   status: 'It\'s about me',
   male: true
   },
   {id: 2, 
     is_follow: true,
     name : {
       first: 'Mila', 
       last: 'Love'
     },
     place: {
       country: 'Russia',
       city: 'Anapa'
     },
     status: 'It\'s about me',
     male: false
     },
   {id: 3, 
     is_follow: false,
     name : {
       first: 'Viltorya', 
       last: 'Paple'
     },
     place: {
       country: 'Russia',
       city: 'Krasnodar'
     },
     status: 'It\'s about me',
     male: false
     }
]})

const UsersReducer = (state = initialState, action) => {
    switch (action.type){
        case SHOW_MORE_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
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
        default:
            return state
    }
}

export default UsersReducer;