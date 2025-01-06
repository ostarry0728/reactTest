import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import Exam from './components/Exam'
import { useState,useRef, useReducer } from 'react'

// 가상의 데이터 (마운트 : 서버에서 데이터 가져옴) (Ajax로 json 파일을 가져옴)
//목업
const mockData = [
  {
    id: 0,  // 고유한 id 값 사용
    isDone: false,
    content: '리액트 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,  // 고유한 id 값 사용
    isDone: false,
    content: '스프링부트 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 2,  // 고유한 id 값 사용
    isDone: false,
    content: '자바 공부하기',
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch(action.type){
    case "INSERT": return [action.data, ...state];
    case "UPDATE": return state.map((item)=>{
      return item.id === action.data ? {...item, isDone:!item.isDone} : item});
    case "DELETE": return state.filter((item)=>{
      return item.id !== action.data
    });
    default: return state;
  }
}

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3);

  //todos에 추가할 레코드를 처리하는 핸들러함수
  const onInsert = (data)=>{
    dispatch({
      type: "INSERT",
      data: {
        ld: idRef.current++,
        isDone: false,
        contnet: data,
        date: new Date().getTime()
      }
    });
  };
  //todos 수정할 레코드 처리하는 핸들러함수
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId,

    });
  };
  
  //todos 삭제할 레코드 처리하는 핸들러 함수
  const onDelete = (targetId)=>{
    dispatch({
      type: "DELETE",
      data: targetId,
    });
  };

  return (
    <div className='app'>
      <Exam/>
      <Header />
      <Editor onInsert={onInsert}/>
      <List todos = {todos} onUqdate = {onUpdate} onDelete = {onDelete}/>
    </div>
  )
}

export default App
