import { useEffect, useState } from "react";

function TodoListInput(props) {
  const [visible, setVisible] = useState(false);
  const [test, setTest] = useState();
  // 체크되면 해당 id값을 불러오기.
  // 체크된 id값을 comp변수에 담기
  useEffect( () => {
    console.log(visible);

    checkFunc2();
  }, [checkFunc2])

  function checkFunc2() {
    if(visible === false) {
      console.log('값이 false')
    } else {
      console.log('값이 true')
    }
  }
  // function checkFunc2() {
  //   if(visible === true) {
  //     setTest({
  //       id: props.id,
  //       text: props.text,
  //     });
  //   } else {
  //     setTest('');
  //   }
  //   console.log(visible);
  // }

  
  
  // props.checkFunc1(test.id);

  const deleteFunc2 = () => {
    props.deleteFunc(props.id);
  }
  

  return (
      <li key={props.id} >
        <input 
          type="checkbox" 
          id={props.id}
          checked={ visible }
          onChange={ (e) => setVisible(e.target.checked) } 
        />
        <label htmlFor={props.id}>{props.id}. {props.text}</label>
        <button onClick={ deleteFunc2 }>삭제</button>
      </li>
  );
}

export default TodoListInput;