import {configureStore} from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import UsersReducer from './usersReducer'

let store = configureStore({
    reducer: {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        sidebarPage: sidebarReducer,
        usersPage: UsersReducer
    }
});

window.store = store;

export default store;