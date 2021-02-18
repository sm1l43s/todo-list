import React from 'react'
import classes from './ToDoList.module.css'
import ToDoListItem from "./ToDoListItem/ToDoListItem";

const ToDoList = (props) => {

    let itemsELement =props.items.map(
        item => <ToDoListItem item={item} remove={props.removeItem} complited={props.taskComplited} />);

    let onAddItem = () => {
        props.addItem();
    }

    let onChangeTextItem = (e) => {
        props.changeItemText(e.target.value);
    }

    return (
        <div className={classes.wrapperToDo}>
            <div className={classes.header}>
                <h2>
                    Task
                </h2>
            </div>
            <div className={classes.wrapperItems}>
                {itemsELement}
            </div>
            <div className={classes.wrapperInput}>
                <input onChange={onChangeTextItem} value={props.newText} />
                <button onClick={onAddItem}>Добавить</button>
            </div>
        </div>
    );
}

export default ToDoList;