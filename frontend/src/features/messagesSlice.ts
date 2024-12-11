import {Message} from "../types";
import {createSlice} from "@reduxjs/toolkit";

export interface MessagesState {
    items: Message[];
    isFetching: boolean;
    isCreating: boolean;
}

export const initialState: MessagesState = {
    items: [],
    isFetching: false,
    isCreating: false,
};

export const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {},
    selectors: {
        selectMessages: (state) => state.items,
        selectMessagesIsFetching: (state) => state.isFetching,
        selectMessagesIsCreating: (state) => state.isCreating,
    },
    extraReducers: () => {

    },
});

export const messagesReducer = messagesSlice.reducer;
export const {
    selectMessages,
    selectMessagesIsFetching,
    selectMessagesIsCreating,
} = messagesSlice.selectors;