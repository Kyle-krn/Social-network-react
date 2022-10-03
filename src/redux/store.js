import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


export let Store = {
  _state : {
    dialogsPage : {
      DialogsData: [
        {id: 1, name: 'Egor'},
        {id: 2, name: 'Mila'},
        {id: 3, name: 'Vasilsa'},
        {id: 4, name: 'Valeria'},
        {id: 5, name: 'Alla'},
        {id: 6, name: 'Max'},
        {id: 7, name: 'Dopler'},
        {id: 8, name: 'Regina'},
      ],
      MessagesData : [
        {id: 1, senderId:1, message: 'Hi'},
        {id: 2, senderId:2, message: 'Hi'},
        {id: 3, senderId:1, message: 'Hru?'},
        {id: 4, senderId:2, message: 'Im fine, u?'},
        {id: 5, senderId:1, message: 'Im very good, thanks. Can i see u boobs?'},
      ],
      newMessageText: '',
    },
    profilePage : {
        PostsData : [
          {id: 1, post: 'Hi, how are u?', likesCount: 0},
          {id: 2, post: "It's my first post", likesCount: 0},
          {id: 3, post: 'Hey everybody', likesCount: 0},
          {id: 4, post: 'Hey everybody', likesCount: 0},
        ],
        newPostText: 'kyle-dev'
    },
    sidebarPage : {
      FriendsData : [
        {id: 1, name: 'Egor'},
        {id: 2, name: 'Mila'},
        {id: 3, name: 'Sveta'},
    ]
    }
  },
  _callSubscriber() {
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
    this._callSubscriber(this._state);
  }
}





