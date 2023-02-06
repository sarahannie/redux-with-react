import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = [
    {id:1, title:'Learning Redux toolkit', content:'I have heard good things about redux'},
    {id:2, title:'Learning Redux toolkit with react', content:'I have heard good things about redux , thing are revolving'}
]


const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        postAdded:{
            reducer(state, action){
            state.push(action.payload)
        },
        prepare(title,content,userId){
            return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        userId  
                    }
            }
        }
    
    }
       
    }
})

export const selectPost = (state) => state.post;
export const {postAdded} = postSlice.actions
export default postSlice.reducer


