function TodoListInput(props) {
  return (
      <li key={props.id}>{props.id}. {props.text}<button>삭제</button></li>
  );
}

export default TodoListInput;