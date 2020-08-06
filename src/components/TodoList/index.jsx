import React from "react";
import TodoContainer from "../../containers/TodoContainer";
import './index.css'
import { Row } from 'antd';

class TodoList extends React.Component {
    render() {
        console.log(this.props.todoList)
        return (
            <div className='cardList'>
                <Row gutter={32}>
                {this.props.todoList.map((item, index) => {
                    return (<TodoContainer todo={item} key={index} index={index}/>)
                })
                }
                </Row>
            </div>
        )
    }
}
export default TodoList;