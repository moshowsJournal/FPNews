import { createSlice } from "@reduxjs/toolkit";

const noticationSlice = createSlice({
    name : "notification",
    initialState : {
        count : 0,
        data : {}
    },
    reducers : {
        updateNotication : (state,action) => {
            return {...state,count : state.count + 1,...action.payload}
        },
        resetCount : (state,action) => {
            return action.payload
        }
    }
})

export const {updateNotication,resetCount} = noticationSlice.actions
export default noticationSlice.reducer