import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMesssage: (state, action) => {
            state.messages.splice(LIVE_CHAT_COUNT, 1); //when there will be more than 10 message, it will start removing 1. so that store will not bloat
            state.messages.push(action.payload);
        }
    }
});
export const { addMesssage } = chatSlice.actions;
export default chatSlice.reducer;