import { useEffect, useState } from "react";
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
  @media screen and (max-width: 1023px) {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
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
  color: #777;
  text-decoration: line-through;
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
      props.unCheckedfunc(unCheckedId.id, unCheckedId.checked);
    }
  };

  const delCompList = (e) => {
    e.preventDefault();
    props.delfunc(props.id);
  }

  return (
      <Li key={props.id} >
        <Div>
          <CheckInputStyle 
            type="checkbox"
            id={props.id}
            className="checkedInput"
            checked={ checkVisible }
            onChange={ e => setCheckVisible(e.target.checked) }
          />
          <label htmlFor={props.id}></label>
          <InputText 
            type="text" 
            value={text}
            disabled
            onChange={e => setText(e.target.value) }
          />
        </Div>
        <DelButton onClick={delCompList}>{btnText || "button"}</DelButton>
      </Li>
  );
}

export default TodoCompInput;