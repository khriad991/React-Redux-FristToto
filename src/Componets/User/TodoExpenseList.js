import React from 'react';
import {useSelector} from "react-redux";
import {RemoveTodo} from "./RemoveTodo";
import {EditListItem} from "./EditListItem";

const TodoExpenseList = () => {
    const todoItem = useSelector((state)=>state.expenseTodo.value)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 ">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            todoItem.map((item,i)=>{
                                return(
                                    <tr key={i.toString()}>
                                        <th>{i}</th>
                                        <th>{item}</th>
                                        <th>
                                            <button
                                                onClick={()=>{EditListItem(item,i)}}
                                                className="btn mx-4 btn-outline-info">
                                                Edit
                                            </button>
                                            <button
                                                onClick={()=>{RemoveTodo(i)}}
                                                className="btn mx-4 btn-outline-danger">
                                                Remove
                                            </button>
                                        </th>
                                    </tr>
                                )})
                        }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>

    );
};

export default TodoExpenseList;