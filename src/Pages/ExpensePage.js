import React from 'react';
import CreateExpenser from "../Componets/User/CreateExpenser";
import TodoExpenseList from "../Componets/User/TodoExpenseList";

const ExpensePage = () => {
    return (
        <div className="container bg-azure my-5 redius">
            <div className="row ">
                <div className="col-md-12">
                    <div className="card bg-azure ">
                        <div className="card-header ">
                            <h3 className="mrginr mr-l text-info"> Add Your Daily Expense</h3>
                        </div>
                        <div className="card-body">
                            <CreateExpenser/>
                            <TodoExpenseList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpensePage;