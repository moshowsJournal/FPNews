import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./routeReducer";
import appThemeReducer from './themeSlice'

export default configureStore({
    reducer : {
        routeReducer,
        appThemeReducer
    }
    
})