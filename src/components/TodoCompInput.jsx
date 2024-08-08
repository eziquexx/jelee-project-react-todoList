import styled from "styled-components";

const LiStyle = styled.li`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #aaa;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`
const P = styled.p`
  text-decoration: line-through;
  @media screen and (max-width: 1023px) {
    font-size: 18px;
    margin-top: 3px;
  }
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

function TodoCompInput(props) {
  // console.log('props로 받은 compTodo 값', props);
  const deleteFunc_4= () => {
    props.deleteFunc_3(props.id);
  }
  const {btnText} = props;

  return (
      <LiStyle key={props.id} >
        <P id={props.id}>{props.text}</P>
        <DelButtonStyle onClick={ deleteFunc_4 }>{btnText || "button"}</DelButtonStyle>
      </LiStyle>
  );
}

export default TodoCompInput;