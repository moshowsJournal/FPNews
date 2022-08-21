import { createSlice } from "@reduxjs/toolkit";
import AppColors from "../utils/colors";

const themeSlice = createSlice({
    name : "AppTheme",
    initialState : {
        primaryColor : AppColors.defaultSkin
    },
    reducers : {
        changeAppSkin : (state,action) => {
            return {...state,primaryColor : action.payload}
        }
    }
})
export const {changeAppSkin} = themeSlice.actions
export default themeSlice.reducer