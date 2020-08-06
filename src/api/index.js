import axios from 'axios'
const URL = 'https://5e9ec500fb467500166c4658.mockapi.io/todos';

export const postTodo = (todo)=>{
    console.log("调用了一次Post");
    return axios.post(URL,todo)
}

export const getTodo = ()=>{
    console.log("调用了一次get");
    return axios.get(URL)
}

export const delTodo = (id)=>{
    console.log("调用了一次delete");
    return axios.delete(URL + '/' + id)
}

export const updateTodo = (todo)=>{
    console.log("调用了一次put");
    return axios.put(URL + '/' + todo.id,todo)
}