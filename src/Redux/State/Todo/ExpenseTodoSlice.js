import {createSlice} from "@reduxjs/toolkit";

export const ExpenseTodoSlice = createSlice({
    name:"expenseTodo",
    initialState:{
        value:[],
    },
    reducers:{
        AddExpense: (state, action )=>{
            state.value.push(action.payload)

        },
        RemoveExpense: (state, action)=>{
            state.value.splice(action.payload,1)
        },
        EditExpense:(state, action)=>{
            state.value.splice(action.payload["index"],1,action.payload["task"])
        }
    }
})


export const {EditExpense,RemoveExpense,AddExpense} =ExpenseTodoSlice.actions
export default ExpenseTodoSlice.reducer