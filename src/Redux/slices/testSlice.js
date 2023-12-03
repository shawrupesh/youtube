import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0
}
const test=createSlice({
name: 'counter',
initialState,
reducers:{
    add:(state)=>{
     state.count=state.count+1
    },
    sub:(state)=>{
        state.count-=1
    }
}
})
export const {add,sub}=test.actions
export default test.reducer