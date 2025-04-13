import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./userSlice";
import {moviesReducer} from "./moviesSlice";
/*import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { combineReducers } from 'redux';
*/

export const appStore = configureStore({
        reducer: {
            user: userReducer,
            movies: moviesReducer,
        },
    }
)

export default appStore;