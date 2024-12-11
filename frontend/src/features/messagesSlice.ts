import {Message} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchMessages} from "./messagesThunks";

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
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.pending, (state) => {
            state.isFetching = true;
        }).addCase(fetchMessages.fulfilled, (state, {payload: messages}) => {
            state.isFetching = false;
            state.items = messages;
        }).addCase(fetchMessages.rejected, (state) => {
            state.isFetching = false;
        });
    },
    selectors: {
        selectMessages: (state) => state.items,
        selectMessagesIsFetching: (state) => state.isFetching,
        selectMessagesIsCreating: (state) => state.isCreating,
    },
});

export const messagesReducer = messagesSlice.reducer;
export const {
    selectMessages,
    selectMessagesIsFetching,
    selectMessagesIsCreating,
} = messagesSlice.selectors;