import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_ALL = 'message/GET_ALL';
const initialState = [];


const messagesSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {},
});


export default messagesSlice.reducer