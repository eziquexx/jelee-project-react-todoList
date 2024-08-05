import { useState, useRef } from 'react';
import styled, { css, useTheme } from 'styled-components'
import TodoListInput from './components/TodoListInput';


function App() {
  // todo list 담을 배열
  const [todoList, setTodoList] = useState( [] );

  // 리스트 담을 상태변수 생성
  const [listText, setListText] = useState('');
  const changeListText = (e) => {
    setListText(e.target.value);
  };

  const addList = (e) => {
    e.preventDefault(); // 새로고침 방지

    // 새로운 todo id 생성
    const newTodoId = todoList.length > 0 ? Math.max(...todoList.map(list => list.id)) + 1 : 1;

    // 새로운 List text 생성
    const newTodoList = { id: newTodoId, text: listText };
    setTodoList([...todoList, newTodoList])
  }

  return (
    <div>
      <div>
        <form onSubmit={ addList }>
          <fieldset>
            <legend>Add</legend>
            <input 
              type='text' 
              value={ listText } 
              placeholder='입력해주세요' 
              onChange={ changeListText }
            ></input>
            <button>추가</button>
          </fieldset>
        </form>
      </div>

      <div>
        <form>
          <fieldset>
            <legend>List</legend>
            <ul>
              {
                todoList.map( (list) => {
                  return (
                    <TodoListInput id={list.id} text={list.text} />
                  )
                } )
              }
            </ul>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
