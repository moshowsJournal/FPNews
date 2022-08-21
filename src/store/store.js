import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./routeReducer";
import appThemeReducer from './themeSlice';
import noticationReducer from './notificationSplice'

export default configureStore({
    reducer : {
        routeReducer,
        appThemeReducer,
        noticationReducer
    }
    
})