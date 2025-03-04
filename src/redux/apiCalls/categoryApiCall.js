import {categoryActions} from "../slices/categorySlice"
import request from "../../utils/request"
import {toast} from "react-toastify"


export function fetchCategories(){
    return async(dispatch,getState)=>{
        try {
            const {data}=await request.get("/api/categories")
            dispatch(categoryActions.setCategories(data))

        } catch (error) {
            toast.error(error.response.data.message)   
        }
    }
}
export function createCategory(newcategory){
    return async(dispatch,getState)=>{
         try {
            const {data}=await request.post("/api/categories",newcategory,{
                headers:{
                    Authorization:"Bearer "+ getState().auth.user.token
                }
            })
            dispatch(categoryActions.createCategory(data))
            toast.success("category created successfully")
         } catch (error) {
            toast.error(error.response.data.message)   
         }
    }
}
export function deleteCategory(idCategory){
    return async(dispatch,getState)=>{
      try {
        const {data}= await request.delete(`/api/categories/${idCategory}`,{
            headers:{
                Authorization:"Bearer "+ getState().auth.user.token
            }
        })
        dispatch(categoryActions.deleteCategory(data.categoryId))
        toast.success(data.message)
      } catch (error) {
        toast.error(error.response.data.message) 
      }
    }
}