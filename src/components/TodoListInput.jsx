import { useEffect, useState } from "react";

function TodoListInput(props) {
  const [visible, setVisible] = useState(false);
  const [test, setTest] = useState();
  // 체크되면 해당 id값을 불러오기.
  // 체크된 id값을 comp변수에 담기
  useEffect( () => {
    // console.log('현재 check상황', visible);
    setTest(props)
    checkFunc_2();
  }, [visible])

  function checkFunc_2() {
    if(visible === true) {
      props.checkFunc_1(test.id);
    } 
  }

  const deleteFunc_2 = () => {
    props.deleteFunc_1(props.id);
  }

  return (
      <li key={props.id} >
        <input 
          type="checkbox" 
          id={props.id}
          checked={ visible }
          onChange={ (e) => setVisible(e.target.checked) } 
        />
        <label htmlFor={props.id}>{props.text}</label>
        <button onClick={ deleteFunc_2 }>삭제</button>
      </li>
  );
}

export default TodoListInput;