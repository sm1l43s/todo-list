const ADD_ITEM = 'ADD-ITEM';
const DELETE_ITEM = 'DELETE-ITEM';
const UPDATE_TEXT_ITEM = 'UPDATE-TEXT-ITEM';
const TASK_COMPLITED = 'TASK-COMPLITED';

let initState = {
    items: [
        {id: 1, text: 'Learn html', isClosed: true},
        {id: 2, text: 'Learn css', isClosed: true},
        {id: 3, text: 'Learn js', isClosed: true},
        {id: 4, text: 'Learn react', isClosed: false}
    ],
    textItem: ''
}

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let newItem = {
                id: state.items.length + 1,
                text: state.textItem,
                status: false
            }
            return {
                ...state,
                items: [...state.items, newItem],
                textItem: ''
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: [...state.items].filter( item => { if(item.id != action.id) return item })
            }
        case UPDATE_TEXT_ITEM:
            return {
                ...state,
                textItem: action.text
            }
        case TASK_COMPLITED:
            return {
                ...state,
                items: [...state.items].map(
                    item => { if(item.id == action.id) { item.isClosed = !item.isClosed } return item })
            }
        default:
            return state;
    }
}

export const addItemCreator = () => {
    return {
        type: ADD_ITEM
    }
}

export const removeItemCreator = (id) => {
    return {
        type: DELETE_ITEM,
        id: id
    }
}

export const changeItemTextCreator = (text) => {
    return {
        type: UPDATE_TEXT_ITEM,
        text: text
    }
}

export const taskComplitedCreator = (id) => {
    return {
        type: TASK_COMPLITED,
        id: id
    }
}

export default itemReducer;