import { useState, useRef, useEffect } from 'react';
import TodoListInput from './components/TodoListInput';


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
  // console.log(compTodo);
  
  // input에 포커스 시키기
  const textInput = useRef(null);
  
  useEffect(() => {
    textInput.current.focus();
  }, [todoList]);

  const addList = (e) => {
    e.preventDefault(); // 새로고침 방지

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
    // const updateTodoList = todoList.filter(lists => lists.id !== id);
    // setTodoList(updateTodoList);

    console.log(id);
    // const updateCompTodoList = todoList.filter(lists => lists.id === id);
    // setCompTodo(updateCompTodoList);
  }
  return (
    <div>
      <div>
        <form onSubmit={ addList }>
          <fieldset>
            <legend>Add To do</legend>
            <input 
              type='text' 
              value={ listText } 
              ref={ textInput }
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
            <legend>To do List</legend>
            <ul>
              {
                todoList.map( (list) => {
                  return (
                    <TodoListInput 
                      key={ list.id  }
                      id={ list.id } 
                      text={ list.text } 
                      deleteFunc={ deleteTodoList }
                      checkFunc1={ checkedTodoList }
                    />
                  )
                } )
              }
            </ul>
          </fieldset>
        </form>
      </div>

      <div>
        <form>
          <fieldset>
            <legend>Completed To do</legend>
            <ul>
              {
                compTodo.map( (complist) => {
                  <li key={ complist.id }>
                    <p>{ complist.id }{ complist.text }</p>
                    <button>삭제</button>
                    <button>복구</button>
                  </li>
                } )
              }
              {/* <li>
                <p>목록 내용</p>
                <button>삭제</button>
                <button>복구</button>
              </li> */}
            </ul>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
