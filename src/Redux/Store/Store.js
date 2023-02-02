
import {configureStore} from "@reduxjs/toolkit";
import ExpenseTodoReducer from "../State/Todo/ExpenseTodoSlice";

export default configureStore({
    reducer:{
        expenseTodo:ExpenseTodoReducer,

    }
})