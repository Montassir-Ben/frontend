import { createSlice } from "@reduxjs/toolkit"

const commentSlice=createSlice({
    name:"comment",
    initialState:{
       comments:[],
    },
    reducers:{
        setComments(state,action){
            state.comments=action.payload
        },
        deleteComment(state,action){
            state.comments=state.comments.filter(c=>c?._id !== action.payload)
        },
        createComment(state,action){
            state.comments.push(action.payload)
        },
      
    }
})
const  commentActions=commentSlice.actions
const commentReducer=commentSlice.reducer
export {
    commentActions,
    commentReducer
}