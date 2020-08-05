import React from "react";
import {postTodo,getTodo} from '../../api'
import {Input ,Button,Space} from 'antd'
import './index.css'
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    onSubmit = () => {
        let req = {content:this.state.text,status:false}
        postTodo(req).then((res)=>{
            // this.props.addTodo({text:this.state.text,isDone:false});
            getTodo().then((res) => {
                this.props.updateTodoList(res.data);
            })
        })
    }

    componentDidMount(){
        getTodo().then((res) => {
            this.props.updateTodoList(res.data);
        })
    }

    onChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    render() {
        return (
            <form id="form">

                <Input type="text" placeholder="todo~~" onChange={this.onChange}/>
                <Button type="primary" shape="round" onClick={this.onSubmit}>提交TODO</Button>
            </form>
        )
    }
}


export default TodoForm;