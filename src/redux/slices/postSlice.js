import {createSlice} from "@reduxjs/toolkit"


const postSlice=createSlice({
    name:"post",
    initialState:{
        posts:[],
        postsCount:null,
        postsCate:[],
        loading:false,
        isPostCreated:false,
        post:null,
        postCount:null,
        postCat:[]
    },
    reducers:{
        setPosts(state,action){
            state.posts=action.payload;
        },
        setLoading(state){
            state.loading=true;
        },
        clearLoading(state){
            state.loading=false; 
        },
        setIsPostCreated(state){
            state.isPostCreated=true;
            state.loading=false
        },
        clearIsPostCreated(state){
            state.isPostCreated=false;
        },
        setPost(state,action){
            state.post=action.payload;
        },
        deletePost(state,action){
            state.posts=state.posts.filter(p=>p?._id !==action.payload)
           
        },
        addCommentToPost(state,action){
            state.post.comments.push(action.payload)
        },
        setLike(state,action){
            state.post.likes=action.payload.likes
        },
        updateCommentPost(state,action){
            state.post.comments=state.post.comments.map(comment=>
                comment._id ===action.payload._id  ? action.payload : comment)
        },
        deleteCommentPost(state,action){
            state.post.comments=state.post.comments.filter(p=>p?._id !==action.payload)
       },
        setPostCount(state,action){
            state.postCount=action.payload
        },
        setPostsCate(state,action){
             state.postCat=action.payload
        }
    },


})
const postActions=postSlice.actions;
const postReducer=postSlice.reducer;
export {
    postActions,
    postReducer
}