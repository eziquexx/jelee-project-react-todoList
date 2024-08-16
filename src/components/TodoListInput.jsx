import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

// const LiStyle = styled.li`
//   width: 100%;
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   cursor: pointer;
//   &:not(:last-child) {
//     margin-bottom: 12px;
//   }
// `
// const Div = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: flex-start;
// `
// const CheckInputStyle = styled.input`
//   display: none;
// `
// const DelButtonStyle = styled.button`
//   padding: 2px 10px;
//   font-size: 20px;
//   border: 1px solid #c53a3a;
//   color: #fff;
//   border-radius: 4px;
//   background-color: #e44d4d;
//   cursor: pointer;
//   &:hover {
//     background-color: #c53a3a;
//   }
// `


function TodoListInput(props) {
  const [checkVisible, setCheckVisible] = useState(false);
  const [checkedId, setCheckedId] = useState("");
  const { btnText } = props;
  const [text, setText] = useState(props.text);

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
  }

  const delList = () => {
    props.delfunc(props.id);
  };

  return (
      <li key={props.id} className="checkInput">
        <div>
          <input 
            type="checkbox" 
            id={props.id}
            checked={ checkVisible }
            onChange={ (e) => setCheckVisible(e.target.checked) } 
          />
          <label htmlFor={props.id}></label>
          <input 
            type="text"
            value={text}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <button onClick={delList}>{ btnText || "button" }</button>
      </li>
  );
}

export default TodoListInput;