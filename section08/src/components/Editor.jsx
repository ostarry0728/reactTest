import './Editor.css'
import { useState, useRef } from 'react';

const Editor = ({onInsert})=>{
    const [content, setContent] =useState(''); 
    const inputRef = useRef(); 
    const onSubmit =()=>{
        if(content === ''){
            alert('내용을 입력해주세요');
            inputRef.current.focus(); 
            return; 
        }
        onInsert(content);
        setContent(''); 
    }; 
    const onChangeContent = (e)=>{
        setContent(e.target.value);
    };
    const onKeyDown = (e)=>{
        if(e.keyCode === 13){
            onSubmit(); 
        }
    };

    return(
        <div className="editor">
            <input value={content} ref={inputRef} type="text" onChange={onChangeContent} onKeyDown={onKeyDown} placeholder='새로운 할일 입력요망'/>
            <button onClick={onSubmit}>추가</button>
        </div>
    ); 
};

export default  Editor; 