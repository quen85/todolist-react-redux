import { connect } from "react-redux";
import Component from "../components/TodosComponent";

function mapDispatchToProps(dispatch) {
    return {
        toggleItem: index => {
            dispatch({ type: "TOGGLE_TODO", index });
        },
        onAddTodo: label => {
            dispatch({ type: "ADD_TODO", label });

        },
        selectFilter: filter => {
            const action = { type: "SET_FILTER",  filter };
            dispatch(action);
        }
    };
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        filter: state.todosFilter,
    };
}

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Component);
export default TodosContainer;