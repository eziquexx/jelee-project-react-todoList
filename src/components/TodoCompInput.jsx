function TodoCompInput(props) {
  // const [test, setTest] = useState(props);
  console.log('props로 받은 compTodo 값', props);
  const deleteFunc_4= () => {
    props.deleteFunc_3(props.id);
  }

  return (
      <li key={props.id} >
        <p id={props.id}>{props.text}</p>
        <button onClick={ deleteFunc_4 }>삭제</button>
      </li>
  );
}

export default TodoCompInput;