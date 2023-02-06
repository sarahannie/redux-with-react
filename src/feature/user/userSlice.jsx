import { createSlice } from "@reduxjs/toolkit";

const initialState = [
     {id:'0', name:'Dark Mar'},
     {id:'1', name:'Queen Mary'},
     {id:'2', name:'Grace Marth'},
]

 const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    }
})

export const selectUserPost = (state) => state.user;
export default userSlice.reducer;