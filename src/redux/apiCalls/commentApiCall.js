import { postActions } from "../slices/postSlice";
import request from "../../utils/request";
import {toast} from "react-toastify"
import { commentActions } from "../slices/commentSlice";



export function createComment(newComment){
    return async(dispatch,getState)=>{
        try {
             const {data}=await request.post("/api/comments",newComment,{
                headers:{
                    Authorization:"Bearer "+getState().auth.user.token
                }
             });
           
               dispatch(commentActions.createComment(data))
             dispatch(postActions.addCommentToPost(data))
         
             

        } catch (error) {
            toast.error(error.response.data.message)   
        }
    }
}


export function updateComment(commentId,comment){
    return async(dispatch,getState)=>{
        try {
            const {data}= await request.put(`/api/comments/${commentId}`,comment,{
                headers:{
                    Authorization:"Bearer "+getState().auth.user.token
                }
            })
            dispatch(postActions.updateCommentPost(data))
        } catch (error) {
            toast.error(error.response.data.message) 
        }
    }
}


export function deleteComment(commentId){
    return async(dispatch,getState)=>{
        try {
           await request.delete(`/api/comments/${commentId}`,{
                headers:{
                    Authorization:"Bearer "+ getState().auth.user.token
                }
            })
            dispatch(postActions.deleteCommentPost(commentId))
            dispatch(commentActions.deleteComment(commentId))
        

        } catch (error) {
           toast.error(error.response.data.message)  
        }
    }
}

export function fetchAllComments(){
    return async(dispatch,getState)=>{
        try {
          const {data}=  await request.get(`/api/comments/`,{
                headers:{
                    Authorization:"Bearer "+ getState().auth.user.token
                }
            })
           dispatch(commentActions.setComments(data))

        } catch (error) {
            toast.error(error.response.data.message)  
        }
    }

}
