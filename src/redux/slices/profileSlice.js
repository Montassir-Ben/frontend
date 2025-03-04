import { createSlice } from "@reduxjs/toolkit";

const profileSlice=createSlice({
    name:"profile",
    initialState:{
        profile:null,
        usersCount:null,
        profiles:[],
        loading:false,
        isProfileDeleted:false,
        loading:false,
        isPostCreated:false,
    
    },
    reducers:{
     setProfile(state,action){
        state.profile=action.payload
     },
     updateProfile(state,action){
        state.profile=action.payload
     },
     setProfilePhoto(state,action){
        state.profile.profilePhoto=action.payload
     },
     setUserCount(state,action){
      state.usersCount=action.payload
     },
     setProfiles(state,action){
      state.profiles=action.payload
     },
     setLoading(state){
      state.loading=true
     },
     clearLoading(state){
      state.loading=false
     },
     setIsProfileDeleted(state){
      state.isProfileDeleted=true
      state.loading=false
     },
     clearIsProfileDeleted(state){
      state.isProfileDeleted=false
     },
     deletePost(state,action){
      state.profile.posts=state.profile.posts.filter(p=>p?._id !==action.payload)
     }

    }
})
const profileReducer=profileSlice.reducer;
const profileActions=profileSlice.actions;
export{profileReducer,profileActions}