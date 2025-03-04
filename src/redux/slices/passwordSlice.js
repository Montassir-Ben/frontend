import {createSlice} from "@reduxjs/toolkit"

const passwordSlice=createSlice({
    name:"password",
    initialState:{
       isError:false,
    },
    reducers:{
     setError(state){
        state.isError=true
     }
    }

})
const passwordActions=passwordSlice.actions
const passwordreducer=passwordSlice.reducer

export{
    passwordActions,
    passwordreducer

}