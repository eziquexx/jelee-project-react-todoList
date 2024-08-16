import { useState, useEffect } from 'react';
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
  @media screen and (max-width: 1023px) {
    width: 100%;
    padding: 14px 0 12px;
    text-align: center;
    background-color: #f0efe9;
    font-size: 20px;
    color: #B2AB85;
    border-bottom: 1px solid #d9d6c7;
  }
`
const P = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 1023px) {
    position: absolute;
    font-size: 12px;
    margin: 0;
    bottom: 18px;
  }
`
const FormContainer = styled.div`
  width: 60%;
  max-width: 560px;
  height: 78%;
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #ddd;
  overflow: hidden;
  box-shadow: 0px 10px 20px -2px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1023px) {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    border: 0;
    box-shadow: none;
  }
`
const ListsContainer = styled.div`
  width: 100%;
  height: auto;
  display: block;
  overflow: auto;
  @media screen and (max-width: 1023px) {
    margin-bottom: 30px;
  }
`
const Form = styled.form`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  overflow: hidden;
`
const Fieldset = styled.fieldset`
  width: 100%;
  height: auto;
  position: relative;
  border: 0;
`
const Ul = styled.ul`
  width: 100%;
  display: block;
`
const Legend = styled.legend`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  // margin-bottom: 10px;
`
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 6px 8px 4px;
  line-height: 120%;
  border-radius: 3px;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  margin-right: 8px;
  &:focus {
    outline: none;
    border: 1px solid #333;
  }
  &::placeholder {
    color: #bbb;
  }
  @media screen and (max-width: 1023px) {
    padding: 8px 8px 6px;
    font-size: 14px;
  }
`
const AddButton = styled.button`
  padding: 2px 7px;
  font-size: 20px;
  border: 1px solid #2972d0;
  color: #fff;
  border-radius: 3px;
  background-color: #2972d0;
  cursor: pointer;
  &:hover {
    background-color: #155ebd;
  }
`


function App() {
  const [inputList, setInputList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [compInputList, setCompInputList] = useState([]);
  
  useEffect(() => {
    const storageItem = [];
    const checkedInputList = [];
    const unCheckedInputList = [];
    const keys = Object.keys(localStorage);
    const keysString = keys.toString();
    const keyword = "listItem";
    const keysNum = keys.map(list => list.slice(8));
    
    if (keysString.includes(keyword)) {
      keysNum.map(list => {
        const storageList = JSON.parse( localStorage.getItem(`${keyword}${list}`) );
        storageItem.push(storageList);
      });

      storageItem.map(list => {
        if(list.checked === "checked") {
          checkedInputList.push(list);
        } else {
          unCheckedInputList.push(list);
        }
      });

      setInputList([...unCheckedInputList]);
      setCompInputList([...checkedInputList]);
    } else {
      setInputList([]);
    }
  }, []);
 
  const submitHandlr = (e) => {
    e.preventDefault();
  }

  const addList = (e) => {
    e.preventDefault();
    const newinputId = inputList.length > 0 ? Math.max(...inputList.map(list => list.id)) + 1 : 1;
    const nowdate = Date.now();
    const newlistItem = {
      id: newinputId,
      text: inputText,
      nowdate: nowdate,
      keyword: "listItem",
      checked: "unchecked"
    }
    setInputList([...inputList, newlistItem]);
    setInputText("");
    localStorage.setItem(`listItem${newlistItem.id}`, JSON.stringify(newlistItem));
  }

  const delList = (id) => {
    const updateInpuList = inputList.filter(list => list.id !== id);
    setInputList(updateInpuList);
    localStorage.removeItem(`listItem${id}`)
  }

  const compDelList = (id) => {
    const updateInpuList = compInputList.filter(list => list.id !==id);
    setCompInputList(updateInpuList);
    localStorage.removeItem(`listItem${id}`);
  }

  const checkedList = (id, checked) => {
    const chekedinputId = inputList.filter(list => list.id === id);
    const unChekedinputId = inputList.filter(list => list.id !== id);
    chekedinputId[0].checked = "checked";
    setInputList([...unChekedinputId]);
    setCompInputList([...compInputList, ...chekedinputId]);
    localStorage.setItem(`listItem${chekedinputId[0].id}`, JSON.stringify(...chekedinputId));
  }

  const unCheckedList = (id, checked) => {
    const checkedinputId = compInputList.filter(list => list.id !== id);
    const unCheckedinputId = compInputList.filter(list => list.id === id);
    unCheckedinputId[0].checked = "unchecked";
    setCompInputList([...checkedinputId]);
    setInputList([...inputList, ...unCheckedinputId]);
    localStorage.setItem(`listItem${unCheckedinputId[0].id}`, JSON.stringify(...unCheckedinputId));
  }

  const editInputText = (id, text) => {
    const editiInputList = inputList.filter(list => list.id === id);
    editiInputList[0].text = text;
    localStorage.setItem(`listItem${editiInputList[0].id}`, JSON.stringify(...editiInputList));
  }

  return (
    <Container>
      <H2>To-do list</H2>
      <P>*할 일 목록이 영역을 벗어났을 경우 스크롤이 가능합니다.</P>
      <FormContainer style={{ backgroundColor:"#fff", padding: "10px" }}>
        <div style={{marginTop:"10px", marginBottom:"10px"}}>
          <Form onSubmit={submitHandlr}>
            <Input
              placeholder='할 일 입력 해주세요.'
              value={inputText}
              onChange={e => setInputText(e.target.value)}
            ></Input>
            <AddButton onClick={addList}>+</AddButton>
          </Form>
        </div>

        <ListsContainer style={{marginTop:"10px"}}>
          <Form onSubmit={ (e) => e.preventDefault() } 
            style={{borderBottom:"1px solid #ddd", paddingBottom:"10px"}}
          >
            <Fieldset>
              <Legend style={{marginBottom:"4px"}}>List</Legend>
              <Ul>
                {
                  inputList.map((list) => {
                    return(
                      <TodoListInput 
                        key={list.id}
                        id={list.id}
                        text={list.text }
                        nowdate={list.nowdate}
                        checked={list.checked}
                        btnText="-"
                        editTextfunc={editInputText}
                        checkedfunc={checkedList}
                        delfunc={delList}
                      />
                    )
                  })
                }
              </Ul>
            </Fieldset>
          </Form>

          <Form onSubmit={ (e) => e.preventDefault() } style={{marginTop:"14px"}}>
            <Fieldset>
              <Legend style={{marginBottom:"4px"}}>Completed To do</Legend>
              <Ul>
                {
                  compInputList.map(list => {
                    return (
                      <TodoCompInput
                        key={list.id}
                        id={list.id}
                        text={list.text}
                        nowdate={list.nowdate}
                        checked={list.checked}
                        btnText="-"
                        unCheckedfunc={unCheckedList}
                        delfunc={compDelList}
                      />
                    )
                  })
                }
              </Ul>
            </Fieldset>
          </Form>
        </ListsContainer>
      </FormContainer>
      <P>Dev. JELEE. 2024</P>
    </Container>
  );
}

export default App;
