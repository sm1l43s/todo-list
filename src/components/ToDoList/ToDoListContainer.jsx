import ToDoList from "./ToDoList";
import {connect} from "react-redux";
import {addItemCreator, changeItemTextCreator, removeItemCreator, taskComplitedCreator} from "../../redux/itemReducer";

let mapStateToProps = (state) => {
    return {
       items: state.toDoItems.items,
       newText: state.toDoItems.textItem
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeItemText: (text) => {
            dispatch(changeItemTextCreator(text));
        },
        addItem: () => {
            dispatch(addItemCreator());
        },
        removeItem: (id) => {
            dispatch(removeItemCreator(id));
        },
        taskComplited: (id) => {
            dispatch(taskComplitedCreator(id));
        }
    }
}

const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);
export default ToDoListContainer;