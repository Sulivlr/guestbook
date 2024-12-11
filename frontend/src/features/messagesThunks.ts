import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {Message} from "../types";

export const fetchMessages = createAsyncThunk<Message[]>(
    'messages/fetchAll',
    async () => {
        const {data: messages} = await axiosApi.get<Message[]>('/messages');
        return messages;
    });