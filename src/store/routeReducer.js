import { createSlice } from "@reduxjs/toolkit";

export const routeSlice = createSlice({
    name : "Auth",
    initialState : {
        name : "Splash"
    },
    reducers : {
        changeRoute : (state,action) => {
            return {...state, name : action.payload}
        }
    }
})

export const {changeRoute} = routeSlice.actions
export default routeSlice.reducer