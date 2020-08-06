export const todoList = (state=[],action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [...state,action.item];
        case "DEL_TODO":
            console.log("到了reduce的删除了,action:",action);
            return [...state].filter((item,index)=>(item.id!==action.id))
        case "UPDATE_TODO":
            console.log("到了reduce的更新了,action:",action);
            return state.map(item=>{
                if(item.id===action.id){
                    console.log("找到了我要的id 更新一下");
                    //todo 
                    return {
                        id:item.id,
                        content:item.content,
                        status:!item.status
                    }
                }
                return item;
            })
        case "UPDATE_TODO_LIST":
            return [...action.itemList]
        default:
            return state;
    }
}