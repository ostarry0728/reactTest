import './Editor.css'
import { useState, useRef } from 'react';

const Editor = ({ onInsert }) => {
    const [content, setContent] = useState(''); 
    const [author, setAuthor] = useState('');
    const inputRef = useRef(); 
    const authorRef = useRef();

    const onSubmit = () => {
        if (content === '') {
            alert('내용을 입력해주세요');
            inputRef.current.focus(); 
            return; 
        }
        if (author === '') {
            alert('작성자를 입력해주세요');
            authorRef.current.focus();
            return;
        }

        onInsert({ content, author }); // content와 author를 함께 전달
        setContent('');
        setAuthor(''); 
    }; 

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onChangeAuthor = (e) => {
        setAuthor(e.target.value);
    };
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit(); 
        }
    };

    return (
        <div className="editor">
            <input 
                value={author} 
                ref={authorRef} 
                type="text" 
                onChange={onChangeAuthor} 
                placeholder="작성자 입력"
            />
            <input 
                value={content} 
                ref={inputRef} 
                type="text" 
                onChange={onChangeContent} 
                onKeyDown={onKeyDown} 
                placeholder='새로운 할일 입력요망'
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    ); 
};

export default Editor;
