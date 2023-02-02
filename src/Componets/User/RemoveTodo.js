import Swal from "sweetalert2";
import Store from "../../Redux/Store/Store";
import {RemoveExpense} from "../../Redux/State/Todo/ExpenseTodoSlice";


export function RemoveTodo (i) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Store.dispatch(RemoveExpense(i))

        }
    })
}