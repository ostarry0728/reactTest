import './List.css'
import ListItem from './ListItem';
import { useState, useMemo } from 'react';

const List = ({todos, onUpdate, onDelete})=>{
    const [search, setSearch] = useState('');
    const onChangeSearch = (e)=>{
        setSearch(e.target.value);
    };
    //useState에 해당되는 서치내용을 바꾸면 List 리랜더링이 발생한다.
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

    //랜더링이 발생할때마다 전체갯수, 업무를 완료한갯수, 업무를 미완료한 갯수를 연산.
    // const getAnalyzeData = ()=>{
    //     console.log();
    //     const totalCount = todos.length;
    //     const todosDone = todos.filter((item)=>{
    //         return item.isDone === true;
    //     });
    //     const doneCount = todosDone.length;
    //     const notDoneCount = totalCount - doneCount;
    //     return {totalCount, doneCount, notDoneCount}
    // };

    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              0
        console.log("getAnalyzeData 호출");
        const totalCount = todos.length;
        const todosDone = todos.filter((item)=>{
            return item.isDone === true;
        });
        const doneCount = todosDone.length;
        const notDoneCount = totalCount - doneCount;
        return {totalCount, doneCount, notDoneCount};
    },[]);

    return(
        <div className='list'>
            <h4>Todo List 🗽</h4>
            <div>
                <p>totalCount": {totalCount}</p>
                <p>doneCount": {doneCount}</p>
                <p>notDoneCount": {notDoneCount}</p>
            </div>
            <input value = {search} type="text" onChange={onChangeSearch} placeholder='검색어를 입력하세요'/>
            <div className='item'>
                {filterItem.map((item)=>{
                   return <ListItem key = {item.id} {...item} onUpdate = {onUpdate} onDelete = {onDelete}/>;
                })}
            </div>
        </div>  
    );
};

export default List;