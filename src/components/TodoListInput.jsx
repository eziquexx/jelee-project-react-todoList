import { useCallback, useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Li = styled.li`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  // border: 1px solid red;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`
const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`
const CheckInputStyle = styled.input`
  display: none;
`
const InputText = styled.input`
  width: auto;
  height: auto;
  display: inline-block;
  border: none;
  line-height: 1;
  background-color: transparent;
  overflow-wrap: anywhere;
  &:focus {
    width: 100%;
    outline: none;
    color: #777;
  }
  @media screen and (max-width: 1023px) {
    font-size: 17px;
  }
`
const DelButton = styled.button`
  width: 22px;
  height: 22px;
  line-height: 1;
  display: block;
  margin-left: 10px;
  font-size: 20px;
  line-height: 0.5;
  color: #fff;
  border-radius: 2px;
  border: 1px solid #EB5F5F;
  background-color: #EB5F5F;
  cursor: pointer;
  &:hover {
    background-color: #c53a3a;
  }
  @media screen and (max-width: 1023px) {
    font-size: 22px;
    font-weight: 300;
  }
`


function TodoListInput(props) {
  const [checkVisible, setCheckVisible] = useState(false);
  const [checkedId, setCheckedId] = useState("");
  const { btnText } = props;
  const [text, setText] = useState(props.text);
  const inputTextRef = useRef();

  useEffect(() => {
    setCheckedId(props);
    checkedfuncVisible();
  }, [checkVisible]);

  const checkedfuncVisible = () => {
    if(checkVisible === true) {
      props.checkedfunc(checkedId.id, checkedId.checked);
    } 
  };

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
  
  const handleBlur = useCallback(() => {
    textEdit();
  }, [text]);

  const textEdit = () => {
    props.editTextfunc(props.id, text);
  };

  const delList = (e) => {
    props.delfunc(props.id);
  };

  const enterFocusBlur = (e) => {
    const keyName = e.key;
    if (keyName === "Enter") {
      inputTextRef.current.blur();
    };
  };

  return (
      <Li key={props.id}>
        <Div>
          <CheckInputStyle 
            type="checkbox" 
            id={props.id}
            className="uncheckedInput"
            checked={ checkVisible }
            onChange={ (e) => setCheckVisible(e.target.checked) } 
          />
          <label htmlFor={props.id}></label>
          <InputText 
            type="text"
            value={text}
            ref={inputTextRef}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyDown={enterFocusBlur}
          />
        </Div>
        <DelButton onClick={delList}>{ btnText || "button" }</DelButton>
      </Li>
  );
}

export default TodoListInput;