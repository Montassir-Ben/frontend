import { profileActions } from "../slices/profileSlice";
import {authActions} from "../slices/authSlice"
import request from "../../utils/request";
import {toast,ToastContainer} from "react-toastify"





export function getUserProfile(userId){
  return  async(dispatch)=>{
    try {
        const {data}=await request.get(`/api/users/profile/${userId}`)
        dispatch(profileActions.setProfile(data))
    } catch (error) {
        toast.error(error.response.data)
    }
  }
}

export function updateProfile(userId,profile){
  return async(dispatch,getState)=>{
    try {
        const {data}=await request.put(`/api/users/profile/${userId}`,profile,{
            headers:{
                Authorization:"Bearer " + getState().auth.user.token
            }
        });
        dispatch(profileActions.updateProfile(data))
        
        
    } catch (error) {
        toast.error(error.response.data)
    }
  }
}

export function deleteProfile(userId){
  return async(dispatch,getState)=>{
    try {
      dispatch(profileActions.setLoading)
        const {data}=await request.delete(`/api/users/profile/${userId}`,{
            headers:{
                Authorization:"Bearer " + getState().auth.user.token
            }
        });
        dispatch(profileActions.setIsProfileDeleted())
        toast.success(data?.message)
        setTimeout(()=>dispatch(profileActions.clearIsProfileDeleted()),2000)
    } catch (error) {
        toast.error(error.response.data.message)
        dispatch(profileActions.clearLoading())
    }
  }
}

export function uploadProfilePhoto(newPhoto){
  return async(dispatch,getState)=>{
    try {
      const {data}= await request.post(`/api/users/profile/profile-photo-upload`,newPhoto,{
        headers:{
          Authorization:"Bearer "+ getState().auth.user.token,
          "Content-Type":"multipart/form-data"
        }
      })
       dispatch(profileActions.setProfilePhoto(data.profilePhoto))
       dispatch(authActions.setUserPhoto(data.profilePhoto))
       toast.success(data.message)
     const user=JSON.parse(localStorage.getItem("userInfo"))  
     user.profilePhoto=data?.profilePhoto
     localStorage.setItem("userInfo",JSON.stringify(user))
  
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
}

export function getUsersCount(){
  return async(dispatch,getState)=>{
    try {
      const {data}= await request.get("/api/users/count",{
        headers:{
          Authorization:"Bearer "+ getState().auth.user.token
        }
      })
      dispatch(profileActions.setUserCount(data))
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
}

export function getAllUsersProfile(){
  return async(dispatch,getState)=>{
    try {
      const {data}= await request.get("/api/users/profile",{
        headers:{
          Authorization:"Bearer "+ getState().auth.user.token
        }
      })
      dispatch(profileActions.setProfiles(data))
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
}

