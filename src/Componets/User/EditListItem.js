import Swal from "sweetalert2";
import Store from "../../Redux/Store/Store";
import {EditExpense} from "../../Redux/State/Todo/ExpenseTodoSlice";


export function EditListItem(item,i) {
    Swal.fire({
        title: 'Update Titile?',
        input:"text",
        inputValue:item,
        inputValidator:(value)=>{
            if(value){
                Store.dispatch(EditExpense({index:i ,task:value}))
            }
        }
    })
}