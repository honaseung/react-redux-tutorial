import { connect } from "react-redux";
import { onChangeInput, onInsert, onToggle, onRemove } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default connect(
  ({ todos }) => {
    console.log(todos);
    return {
      input: todos.input,
      todos: todos.todos,
    };
  },
  {
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
  }
)(TodosContainer);
