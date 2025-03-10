import { postActions } from "../slices/postSlice";
import request from "../../utils/request";
import {toast} from "react-toastify"
import { profileActions } from "../slices/profileSlice";


export function fetchPosts(){
    return async(dispatch)=>{
        try {
            const{data}= await request.get("/api/posts")
            dispatch(postActions.setPosts(data))
        } catch (error) {
            toast.error(error.response.data.message)
        }

    }
}

export function fetchPostsPagination(pageNumber){
    return async(dispatch)=>{
        try {
            const{data}= await request.get(`/api/posts?pageNumber=${pageNumber}`)
            dispatch(postActions.setPosts(data))
        } catch (error) {
            toast.error(error.response.data.message)
        }

    }
}

export function fetchPostsCategory(category){
    return async(dispatch)=>{
        try {
            const{data}= await request.get(`/api/posts?category=${category}`)
            dispatch(postActions.setPostsCate(data))
        } catch (error) {
            toast.error(error.response.data.message)
        }

    }
}


export function createPost(newPost){
    return async(dispatch,getState)=>{
        try {
            dispatch(postActions.setLoading())
           await request.post(`/api/posts`,newPost,{
                headers:{
                    Authorization:"Bearer "+getState().auth.user.token,
                    "Content-Type":"multipart/form-data"
                }
            })
            dispatch(postActions.setIsPostCreated());
            setTimeout(()=>dispatch(postActions.clearIsPostCreated()),2000)
        } catch (error) {
            toast.error(error.response.data.message) 
            dispatch(postActions.clearLoading())
        }
    }
}

export function fetchSinglePost(postId){
    return async(dispatch)=>{
        try {
            const {data}=await request.get(`/api/posts/${postId}`)
            dispatch(postActions.setPost(data))
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
}

export function updatePost(postId,newPost){
    return async(dispatch,getState)=>{
        try {
            const {data}=await request.put(`/api/posts/${postId}`,newPost,{
                headers:{
                    Authorization:"Bearer "+getState().auth.user.token
                }
            })
            dispatch(postActions.setPost(data))
            toast.success("Post is updated")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
}
export function deletePost(postId){
  return async (dispatch,getState)=>{
    try {
        const {data}= await request.delete(`/api/posts/${postId}`,{
            headers:{
                Authorization:"Bearer " + getState().auth.user.token,
            }
        });
        dispatch(profileActions.deletePost(postId))
        dispatch(postActions.deletePost(postId))
      
        toast.success(data.message)
    } catch (error) {
        toast.error(error.response.data.message) 
    }
  }
}

export function toggleLikePost(postId){
    return async(dispatch,getState)=>{
        try {
            const {data}=await request.put(`/api/posts/like/${postId}`,{},{
                headers:{
                    Authorization:"Bearer "+ getState().auth.user.token
                }
            })
           dispatch(postActions.setLike(data)) 
        } catch (error) {
            toast.error(error.response.data.message)  
        }
    }
}

export function getPostCount(){
    return async(dispatch)=>{
        try {
            const {data}=await request.get("/api/posts/count")
            dispatch(postActions.setPostCount(data))
        } catch (error) {
            toast.error(error.response.data.message)     
        }
    }
}

export function updatePostImage(newImage,postId){
    return async(dispatch,getState)=>{
        try {
           await request.put(`/api/posts/update-image/${postId}`,newImage,{
                headers:{
                    Authorization:"Bearer "+getState().auth.user.token,
                    "Content-Type":"multipart/form-data"
                }
            })
           toast.success("New post image uploaded successfully")
        } catch (error) {
            toast.error(error.response.data.message)   
        }
    }
}