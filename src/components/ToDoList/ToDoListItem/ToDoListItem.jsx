import React from 'react'
import classes from './ToDoListItem.module.css'

const ToDoListItem = (props) => {

    let onRemove = (e) => {
        props.remove(e.target.value);
    }

    let onChangeCheckBox = (e) => {
        props.complited(e.target.value);
    }

    return (
        <div className={classes.item}>
            <label className={props.item.isClosed ? classes.closed : classes.active}>
                {props.item.isClosed ?
                    <input type="checkbox" value={props.item.id} onChange={onChangeCheckBox} checked/> :
                    <input type="checkbox" value={props.item.id} onChange={onChangeCheckBox}/>}
                {props.item.text}
            </label>
            <button className={classes.remove} onClick={onRemove} value={props.item.id}>Delete</button>
        </div>
    );
}

export default ToDoListItem;