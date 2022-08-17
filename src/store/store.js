import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./routeReducer";

export default configureStore({
    reducer : routeReducer
})