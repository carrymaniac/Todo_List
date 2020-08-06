import React from 'react';
import './todo.css'
import { delTodo,updateTodo} from '../../api'
import { Card,Col } from 'antd';
import {CloseOutlined} from '@ant-design/icons';


class Todo extends React.Component {
    componentWillUpdate(){
        
    }
    delete = (event) => {
        delTodo(this.props.todo.id).then(() => {
            //todo 在页面上删除对应的todo
            console.log("开始删除");
            this.props.delTodo(this.props.todo.id);
        })
        event.stopPropagation();
    }

    changeDone = () => {
        let todo = {id:this.props.todo.id,content:this.props.todo.content,status:!this.props.todo.status}
        updateTodo(todo).then(()=>{
            //todo 在页面上更新对应的todo
            console.log("开始改变状态");
            this.props.updateTodo(todo.id);
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