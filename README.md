# JELEE Mini Project - To-do List made with React
리액트를 사용하여 To-do List를 만들고 GitHub Pages로 배포하는 개인 미니 프로젝트.

:star: [JELEE Notion - Mini Project](https://www.notion.so/6c646943c1ce49e09175929af3e2711e?v=1b7171c6124349e388955a29009c864e)로 이동하면 해당 미니 프로젝트 또는 다른 프로젝트를 보실 수 있습니다. :star:

<br/>

## 	:speech_balloon: 프로젝트 소개
학원 수업 시간에 배운 회원 목록 추가 예제를 활용하여 회원 목록 추가, 삭제 기능을 구현하였고 개별로 To-do List에서 필요한 완료 기능을 추가하여 To-do List를 만들었습니다.
- 추가한 목록은 새로고침 또는 웹브라우저를 종료 후 실행시키면 사라집니다.
- 후에 이 부분을 보강할 수 있으면 보강할 계획입니다.
> [!CAUTION]
> 경고: 이 미니 프로젝트는 상업적인 용도가 아닙니다.

<br/>

## :walking: 프로젝트 목적
- React를 이해하기 위하여 React를 사용하여 간단한 To-do List를 제작하였습니다.
- 개인이 가볍게 사용할 목적으로 제작하였습니다.

<br/>

## :calendar: 개발 기간
2024-08-05 ~ 2024-08-21
- 08/05 구조 설계 및 개발 시작
- 08/07 개발 완료
- 08/12~08/20 수정 작업

<br/>

## 	:star: 프로그래머
- JELEE

<br/>

## :computer: 개발 환경
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
- Visual Studio Code
- GitHub
- GitHub Pages

<br/>

## :clipboard: 기술 스택
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- HTML5
- CSS3
- JavaScript
- React

<br/>

## UX/UI 완성
<img src="https://file.notion.so/f/f/88f41c08-964b-40ac-b3af-41d7c59069dc/6a089de4-1ab1-4154-9dc4-9aaa48b26e8c/image.png?table=block&id=c96f3854-d593-4d0a-8f55-e16a6b073d7c&spaceId=88f41c08-964b-40ac-b3af-41d7c59069dc&expirationTimestamp=1724335200000&signature=RpuchG9StvvV6LDmnQHdiKG5toL3v2O_X31qtV7na0I&downloadName=image.png" alt="todo list 데스크탑 화면">
<img src="https://file.notion.so/f/f/88f41c08-964b-40ac-b3af-41d7c59069dc/f8636941-8794-4288-9935-30d8bae02183/image.png?table=block&id=2332ebd5-9be3-422f-b1e0-58cf8f83775e&spaceId=88f41c08-964b-40ac-b3af-41d7c59069dc&expirationTimestamp=1724335200000&signature=uCFN1xGe--JV5O6G3I_FzqZvtyoI-195Dw5ta_a42ng&downloadName=image.png" alt="todo list 태블릿, 모바일 화면">

<br/>

## :gear: 주요 기능
- 할 일을 입력 후 + 버튼을 클릭하면 할 일이 추가됩니다.
- 추가된 할 일을 체크 클릭하면 할 일 완료 상태로 바뀝니다.
- 추가된 할 일의 내용을 수정할 수 있습니다.
- 추가된 할 일, 또는 완료 상태의 할 일을 - 버튼을 클릭하여 삭제할 수 있습니다.
- 반응형으로 제작하여 브라우저 너비 마다 다르게 보입니다. (데스크탑과 태블릿+모바일 기준으로 나누었습니다.)

<br/>

## :eyes: 개발 참고 자료
- To do List 입력 후 추가, 삭제하는 기능 (학원 수업 때 배운 내용 참고)
- 웹브라우저 새로고침 또는 종료 후 실행했을 경우 localStorage의 데이터를 가져와서 화면에 출력하기 위해 참고한 자료
  - [StackOverflow](https://stackoverflow.com/questions/77006383/react-localstorage-value-resets-after-every-refresh)
  - [MDN-Array.prototype.includes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
  - [MDN-String.prototype.includes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
  - [MDN-String.prototype.slice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
  - [MDN-String.prototype.toString()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toString)
- input checkbox 기능
  - [React input](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
- useCallback
  - [React useCallback](https://ko.react.dev/reference/react/useCallback)
- onBlur 기능
  - [React FocusEvent-onBlur](https://ko.react.dev/reference/react-dom/components/common#focusevent-handler)
  - [MDN-blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
- enter키 방지
  - [React KeyboardEvent-onKeyDown](https://ko.react.dev/reference/react-dom/components/common#keyboardevent-handler)
- 배열 정렬
  - [MDN-Array.prototype.sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- textarea 줄바꿈
  - [CodeSandbox](https://codesandbox.io/p/sandbox/textarea-auto-resize-react-hngvd?file=%2Fsrc%2Findex.js%3A19%2C1)
- styled-components
  - [styled-components](https://styled-components.com/)

<br/>

## :label: 저작권 및 사용권 정보
- 개인 미니 프로젝트이며 상업적이 용도가 아닙니다.
