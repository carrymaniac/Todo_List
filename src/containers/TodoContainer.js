import Todo from "../components/Todo";
import {updateTodo,delTodo} from "../action";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        updateTodo: (item) =>{
            dispatch(updateTodo(item))
        },
        delTodo: (id) =>{
            dispatch(delTodo(id))
        }
    }
}
const TodoContainer = connect(
    null,
    mapDispatchToProps
)(Todo)

export default TodoContainer;