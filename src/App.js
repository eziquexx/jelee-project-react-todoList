import { useState, useRef, useEffect } from 'react';
import TodoListInput from './components/TodoListInput';
import TodoCompInput from './components/TodoCompInput';


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
  // const [compTodoList, setCompTodoList] = useState([]);
  // console.log(compTodo);
  
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
    // console.log('todoList현재값', todoList);
    // console.log('todoList타입', typeof todoList);
    console.log('compTodo현재값', compTodo);
    console.log('compTodo타입', typeof compTodo);
  //   console.log('compTodoList현재값', compTodoList);
  //   console.log('compTodoList타입', typeof compTodoList);
  }, [compTodo])

  const deleteCompList = (id) => {
    const updateCompList = compTodo.filter(lists => lists.id !== id);
    setCompTodo(updateCompList);
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
                      deleteFunc_1={ deleteTodoList }
                      checkFunc_1={ checkedTodoList }
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
                compTodo.map( (list) => {
                  return (
                    <TodoCompInput 
                      key={ list.id }
                      id={ list.id } 
                      text={ list.text } 
                      deleteFunc_3={ deleteCompList }
                    />
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
