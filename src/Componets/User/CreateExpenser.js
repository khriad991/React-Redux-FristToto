import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {AddExpense} from "../../Redux/State/Todo/ExpenseTodoSlice";



const CreateExpenser = () => {

    const disPatch = useDispatch();
    const  InputName= useRef();

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-7 py-4">
                    <input type="text "
                           placeholder="Subject Name"
                           className="form-control"
                           ref={InputName}
                    />
                </div>
                <div className="col-md-3 py-2">
                    <button
                        onClick={()=>disPatch(AddExpense(InputName.current.value))}
                        className=" btn btn-outline-info  w-75 text-dark fw-bold">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateExpenser;