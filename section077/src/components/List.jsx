import './List.css'
import ListItem from './ListItem';
import { useState } from 'react';

const List = ({todos, onUpdate, onDelete})=>{
    const [search, setSearch] = useState('');

    const onChangeSearch = (e)=>{
        setSearch(e.target.value); 
    };

    //useState 해당되는 서치내용을 바꾸면 List 리랜더링이 발생한다. 
    //이때 필터링을 진행한다. 
    const getFilterItem = ()=>{
        if(search === ''){
            return todos; 
        }
        return todos.filter((item)=>{
            return item.content.toLowerCase().includes(search.toLowerCase());
        }); 
    };
    const filterItem = getFilterItem(); 

    return(
        <div className='list'>
            <h4>Todo List 🌞</h4>
            <input value={search} type="text" onChange={onChangeSearch} placeholder='검색어를 입력해주세요' />
            <div className='item'>
                {filterItem.map((item)=>{
                    return <ListItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete}/>;
                })}
            </div>
        </div>
    ); 
};

export default  List; 