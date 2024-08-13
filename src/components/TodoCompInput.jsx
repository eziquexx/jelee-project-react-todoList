import { useEffect, useState } from "react";
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
//   color: #aaa;
//   &:not(:last-child) {
//     margin-bottom: 12px;
//   }
// `
// const P = styled.p`
//   text-decoration: line-through;
//   @media screen and (max-width: 1023px) {
//     font-size: 18px;
//     margin-top: 3px;
//   }
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

function TodoCompInput(props) {
  const [checkVisible, setCheckVisible] = useState(true);
  const [unCheckedId, setUnCheckedId] = useState("");
  const {btnText} = props;
  const [text, setText] = useState(props.text);

  useEffect(() => {
    setUnCheckedId(props);
    unCheckedfuncVisible();
  }, [checkVisible]);

  const unCheckedfuncVisible = () => {
    if (checkVisible === false) {
      props.unCheckedfunc(unCheckedId.id);
    }
  };

  const delCompList = () => {
    props.delfunc(props.id);
  }
  // console.log('props로 받은 compTodo 값', props);
  // const deleteFunc_4= () => {
  //   props.deleteFunc_3(props.id);
  // }

  return (
      <li key={props.id} >
        <input 
          type="checkbox"
          id={props.id}
          checked={ checkVisible }
          onChange={ e => setCheckVisible(e.target.checked) }
        />
        <input 
          type="text" 
          value={text}
          onChange={e => setText(e.target.value) }
        />
        <button onClick={delCompList}>{btnText || "button"}</button>
      </li>
  );
}

export default TodoCompInput;