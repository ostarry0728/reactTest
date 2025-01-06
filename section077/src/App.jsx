import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef } from 'react'

// 가상의 데이터
const mockData = [
  {
    id: 0,
    isDone: false,
    content: '리액트공부하기',
    author: '홍길동',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '스프링부트공부하기',
    author: '이순신',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: '유튜브동영상 자바보면서 쉬기',
    author: '강감찬',
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData); 
  const idRef = useRef(3); 

  // todos 추가할 레코드 처리하는 핸들러함수
  const onInsert = ({ content, author }) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content, // 할일 내용
      author,  // 작성자
      date: new Date().getTime(), 
    };
    setTodos([newTodo, ...todos]); 
  };

  // todos 수정할 레코드 처리하는 핸들러함수
  const onUpdate = (targetId, changes) => {
    setTodos(
        todos.map((item) =>
            item.id === targetId ? { ...item, ...changes } : item
        )
    );
};


  // todos 삭제할 레코드 처리하는 핸들러 함수
  const onDelete = (targetId) => {
    setTodos(todos.filter((item) => item.id !== targetId)); 
  };

  return (
    <div className='app'>
      <Header />
      <Editor onInsert={onInsert} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App;
