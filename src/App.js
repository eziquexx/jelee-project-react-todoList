import { useState, useEffect } from 'react';
import './App.css';
// import styled from 'styled-components';
import TodoListInput from './components/TodoListInput';
import TodoCompInput from './components/TodoCompInput';

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   box-sizing: border-box;
// `
// const H2 = styled.h2`
//   color: #333;
//   margin-top: 6px;
//   margin-bottom: 6px;
//   @media screen and (max-width: 1023px) {
//     width: 100%;
//     padding: 14px 0 12px;
//     text-align: center;
//     background-color: #f0efe9;
//     font-size: 20px;
//     margin: 0;
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 10;
//     display: block;
//     color: #B2AB85;
//     border-bottom: 1px solid #d9d6c7;
//   }
// `
// const P = styled.p`
//   font-size: 14px;
//   color: #aaa;
//   margin-bottom: 14px;
//   @media screen and (max-width: 1023px) {
//     position: absolute;
//     font-size: 12px;
//     margin-top: 0px;
//     bottom: 8px;
//   }
// `
// const FormContainer = styled.div`
//   width: 60%;
//   max-width: 560px;
//   height: 78%;
//   position: relative;
//   padding: 20px;
//   display: flex;
//   justify-content: flex-start;
//   flex-direction: column;
//   box-sizing: border-box;
//   background-color: #fff;
//   border: 1px solid #dddddd;
//   overflow: hidden;
//   box-shadow: 0px 10px 20px -2px rgba(0, 0, 0, 0.2);
//   @media screen and (max-width: 1023px) {
//     width: 100%;
//     min-width: 100%;
//     max-width: 100%;
//     height: 100%;
//     border: 0;
//     box-shadow: none;
//   }
// `
// const ListsContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   box-sizing: border-box;
// `
// const FormWrap = styled.div`
//   width: 100%;
//   height: auto;
//   padding: 10px;
//   box-sizing: border-box;
//   overflow: hidden;
// `
// const Form = styled.form`
//   width: 100%;
//   height: auto;
//   display: block;
//   box-sizing: border-box;
//   overflow: hidden;
// `
// const Fieldset = styled.fieldset`
//   width: 100%;
//   height: auto;
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   border: 0;
// `
// const Ul = styled.ul`
//   width: 100%;
//   display: block;
// `
// const Legend = styled.legend`
//   display: block;
//   font-size: 18px;
//   font-weight: 600;
//   color: #333;
//   margin-bottom: 10px;
// `
// const Input = styled.input`
//   display: block;
//   width: 100%;
//   // heigth: auto;
//   padding: 10px 10px 8px;
//   line-height: 120%;
//   border-radius: 4px;
//   border: 1px solid #dddddd;
//   box-sizing: border-box;
//   margin-right: 10px;
//   &:focus {
//     outline: none;
//     border: 1px solid #333;
//   }
//   &::placeholder {
//     color: #bbb;
//   }
//   @media screen and (max-width: 1023px) {
//     font-size: 18px;
//   }
// `
// const AddButton = styled.button`
//   padding: 2px 10px;
//   font-size: 20px;
//   border: 1px solid #155ebd;
//   color: #fff;
//   border-radius: 4px;
//   background-color: #2972d0;
//   cursor: pointer;
//   &:hover {
//     background-color: #155ebd;
//   }
//   @media screen and (max-width: 1023px) {
//     font-size: 18px;
//     padding: 2px 15px;
//   }
// `



function App() {
  const [inputList, setInputList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [compInputList, setCompInputList] = useState([]);

  useEffect(() => {
    const storageItem = [];
    // const keyWord = "listItem";
    //localstorage key안에 listItem 글자가 있으면 다음 실행.
    //storageItem.includes(keyWord) ? true : false;
    if(localStorage.length < 0 || localStorage.length === 0) {
      setInputList([]);
    }
    // for (let i = 0; i < localStorage.length; i++) {
    //   const test = JSON.parse(localStorage.getItem(`listItem${i+1}`));
    //   storageItem.push(...test);
    // }
    setInputList(storageItem);
    console.log(storageItem);
    // storageItem.includes(keyWord) ? console.log(true) : console.log(false);
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
      nowdate: nowdate
    }
    setInputList([...inputList, newlistItem]);
    setInputText("");
    localStorage.setItem(`listItem${newlistItem.id}`, JSON.stringify([newlistItem]));
  }

  const delList = (id) => {
    const updateInpuList = inputList.filter(list => list.id !== id);
    setInputList(updateInpuList);
    localStorage.removeItem(`listItem${id}`);
  }

  const compDelList = (id) => {
    const updateInpuList = compInputList.filter(list => list.id !==id);
    setCompInputList(updateInpuList);
    localStorage.removeItem(`listItem${id}`);
  }

  const checkedList = (id) => {
    const chekedinputId = inputList.filter(list => list.id === id);
    const unChekedinputId = inputList.filter(list => list.id !== id);
    setInputList([...unChekedinputId]);
    setCompInputList([...compInputList, ...chekedinputId]);
  }

  const unCheckedList = (id) => {
    const checkedinputId = compInputList.filter(list => list.id !== id);
    const unCheckedinputId = compInputList.filter(list => list.id === id);
    setCompInputList([...checkedinputId]);
    setInputList([...inputList, ...unCheckedinputId]);
  }



  
  return (
    <div>
      <h2>To-do list</h2>
      <p>*할 일 목록이 영역을 벗어났을 경우 스크롤이 가능합니다.</p>
      <div style={{ backgroundColor:"#fff", padding: "10px" }}>
      <form onSubmit={submitHandlr}>
        <input
          placeholder='입력해주세요.'
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        ></input>
        <button onClick={addList}>add</button>
      </form>

        <form onSubmit={ (e) => e.preventDefault() }>
          <fieldset>
            <legend>List</legend>
            <ul>
              {
                inputList.map((list) => {
                  return(
                    <TodoListInput 
                      key={ list.id }
                      id={ list.id }
                      text={ list.text }
                      nowdate={ list.nowdate }
                      btnText="-"
                      checkedfunc={ checkedList }
                      delfunc={ delList }
                    />
                  )
                })
              }
            </ul>
          </fieldset>
        </form>

        <form onSubmit={ (e) => e.preventDefault() }>
          <fieldset>
            <legend>Completed To do</legend>
            <ul>
              {
                compInputList.map(list => {
                  return (
                    <TodoCompInput
                      key={ list.id }
                      id={ list.id }
                      text={ list.text }
                      nowdate={ list.nowdate }
                      btnText="-"
                      unCheckedfunc={ unCheckedList }
                      delfunc={ compDelList }
                    />
                  )
                })
              }
            </ul>
          </fieldset>
        </form>
      </div>
      <p>Dev. JELEE. 2024</p>
    </div>
  );
}

export default App;
