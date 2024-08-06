import { useEffect, useState } from "react";
import styled from "styled-components";

const LiStyle = styled.li`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`
const Div = styled.div`
  width: 100%;
`
const CheckInputStyle = styled.input`
  display: none;
`
const DelButtonStyle = styled.button`
  padding: 2px 10px;
  font-size: 20px;
  border: 1px solid #c53a3a;
  color: #fff;
  border-radius: 4px;
  background-color: #e44d4d;
  cursor: pointer;
  &:hover {
    background-color: #c53a3a;
  }
`


function TodoListInput(props) {
  const [visible, setVisible] = useState(false);
  const [test, setTest] = useState();
  const { btnText } = props;

  useEffect( () => {
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
      <LiStyle key={props.id} className="checkInput">
        <Div>
          <CheckInputStyle 
            type="checkbox" 
            id={props.id}
            checked={ visible }
            onChange={ (e) => setVisible(e.target.checked) } 
          />
          <label htmlFor={props.id}></label>
          <label htmlFor={props.id}>{props.text}</label>
        </Div>
        <DelButtonStyle onClick={ deleteFunc_2 } >{btnText || "button"}</DelButtonStyle>
      </LiStyle>
  );
}

export default TodoListInput;