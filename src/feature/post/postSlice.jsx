import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1, title:'Learning Redux toolkit', content:'I have heard good things about redux'},
    {id:2, title:'Learning Redux toolkit with react', content:'I have heard good things about redux , thing are revolving'}
]


const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{

    }
})

export const selectPost = (state) => state.post;

export default postSlice.reducer


