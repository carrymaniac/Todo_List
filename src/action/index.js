
export const addTodo = (item) =>({
        type: "ADD_TODO",
        item: item
})
export const delTodo = (index) =>({
        type: "DEL_TODO",
        id: index
})
export const updateTodo = (index) =>({
        type: "UPDATE_TODO",
        id: index
})
export const updateTodoList = (itemList) =>({
        type: "UPDATE_TODO_LIST",
        itemList: itemList
})


