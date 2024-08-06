import { useState, useRef, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import TodoListInput from './components/TodoListInput';
import TodoCompInput from './components/TodoCompInput';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`
const H2 = styled.h2`
  color: #333;
  margin-bottom: 6px;
`
const P = styled.p`
  font-size: 12px;
  color: #aaa;
  margin-bottom: 10px;
`
const FormContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #dddddd;
  box-shadow: 0px 10px 20px -2px rgba(0, 0, 0, 0.2);
`
const FormWrap = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: 1px solid #ddd;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`
const Form = styled.form`
  width: 100%;
  height: auto;
  display: block;
  padding: 10px;
  box-sizing: border-box;
`
const Fieldset = styled.fieldset`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  border: 0;
`
const Ul = styled.ul`
  width: 100%;
  display: block;
`
const Legend = styled.legend`
  display: none;
  font-size: 18px;
  font-weight: 600;
  color: #222;
`
const Input = styled.input`
  display: block;
  width: 91%;
  heigth: auto;
  padding: 10px 10px 8px;
  line-height: 120%;
  border-radius: 4px;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  &:focus {
    outline: 1px solid #888888;
  }
  &::placeholder {
    color: #bbb;
  }
`
const AddButton = styled.button`
  padding: 2px 10px;
  font-size: 20px;
  border: 1px solid #155ebd;
  color: #fff;
  border-radius: 4px;
  background-color: #2972d0;
  cursor: pointer;
  &:hover {
    background-color: #155ebd;
  }
`



function App() {

  // todo list 담을 배열
  const [todoList, setTodoList] = useState([]);

  // 리스트 담을 상태변수 생성
  const [listText, setListText] = useState('');
  const changeListText = (e) => {
    setListText(e.target.value);
  };

  // 완료된 todo 담을 배열
  const [compTodo, setCompTodo] = useState([]);
  
  // input에 포커스 시키기
  const textInput = useRef(null);
  
  useEffect(() => {
    textInput.current.focus();
  }, [todoList]);

  const addList = (e) => {
    e.preventDefault();

    // 새로운 todo id 생성
    const newTodoId = todoList.length > 0 ? Math.max(...todoList.map(list => list.id)) + 1 : 1;

    // 새로운 List text 생성
    const newTodoList = { id: newTodoId, text: listText };
    setTodoList([...todoList, newTodoList])
    setListText('');
  }

  const deleteTodoList = (id) => {
    const updateTodoList = todoList.filter(lists => lists.id !== id);
    setTodoList(updateTodoList);
  }

  const checkedTodoList = (id) => {
    const checkedList = todoList.filter(lists => lists.id === id);
    const updateTodoList = todoList.filter(lists => lists.id !== id);
    console.log('checkedList 값은', ...checkedList);
    // console.log('checkedList 타입은', typeof checkedList);

    setCompTodo([...compTodo, ...checkedList]);
    setTodoList(updateTodoList);
    // setCompTodoList(...compTodoList, compTodo); 
  }
  useEffect( () => {
    console.log('compTodo현재값', compTodo);
    console.log('compTodo타입', typeof compTodo);
  }, [compTodo])

  const deleteCompList = (id) => {
    const updateCompList = compTodo.filter(lists => lists.id !== id);
    setCompTodo(updateCompList);
  }

  return (
    <Container>
      <H2>To do list</H2>
      <P>*할 일 목록이 영역을 벗어났을 경우 스크롤이 가능합니다.</P>
      <FormContainer>
        <FormWrap style={{ marginBottom: '10px', border: '0' }}>
          <Form onSubmit={ addList } style={{ padding: '0' }}>
            <Fieldset>
              <Legend style={{ display: 'none' }}>Add To do</Legend>
              <Input 
                type='text' 
                value={ listText } 
                ref={ textInput }
                placeholder='할 일 입력' 
                onChange={ changeListText }
              ></Input>
              <AddButton>+</AddButton>
            </Fieldset>
          </Form>
        </FormWrap>

        <FormWrap style={{ height: '70%', overflowY: 'scroll' }}>
          <Form onSubmit={ e => e.preventDefault() }>
            <Fieldset>
              <Legend style={{ marginBottom: '10px' }}>List</Legend>
              <Ul>
                {
                  todoList.map( (list) => {
                    return (
                      <TodoListInput 
                        key={ list.id  }
                        id={ list.id } 
                        text={ list.text } 
                        btnText="-"
                        deleteFunc_1={ deleteTodoList }
                        checkFunc_1={ checkedTodoList }
                      />
                    )
                  } )
                }
              </Ul>
            </Fieldset>
          </Form>
        </FormWrap>

        <FormWrap style={{ height: '20%', overflowY: 'scroll' }}>
          <Form onSubmit={ e => e.preventDefault() }>
            <Fieldset>
              <Legend>Completed To do</Legend>
              <Ul>
                {
                  compTodo.map( (list) => {
                    return (
                      <TodoCompInput 
                        key={ list.id }
                        id={ list.id } 
                        text={ list.text } 
                        btnText="-"
                        deleteFunc_3={ deleteCompList }
                      />
                    )
                  } )
                }
              </Ul>
            </Fieldset>
          </Form>
        </FormWrap>
      </FormContainer>
    </Container>
  );
}

export default App;
