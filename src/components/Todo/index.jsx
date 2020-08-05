import React from 'react';
import './todo.css'
import { getTodo,delTodo,updateTodo} from '../../api'
import { Card, Space,Col } from 'antd';
import {CloseOutlined} from '@ant-design/icons';


class Todo extends React.Component {
    delete = () => {
        delTodo(this.props.todo.id).then(() => {
                getTodo().then((res) => {
                    this.props.updateTodoList(res.data);
                })
        })
    }

    changeDone = () => {
        let todo = {id:this.props.todo.id,content:this.props.todo.content,status:this.props.todo.status}
        updateTodo(todo).then(()=>{
            getTodo().then((res) => {
                this.props.updateTodoList(res.data);
            })
        })
    }
    render(){
        return (
            <Col span={8}>
            <Card  onClick={this.changeDone} title="Card title" hoverable className="mycard">
                    <span className={this.props.todo.status ? "isdone" : "notdone"}>{this.props.todo.content}</span>
                    <CloseOutlined className="delete" onClick={this.delete}/>
            </Card>
            </Col>
        )
    }
}
export default Todo;