import './ListItem.css'
import { useState } from 'react';

const ListItem = ({ id, isDone, content, date, author, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState(content);

    const onChangeCheckBox = () => {
        onUpdate(id, { isDone: !isDone });
    };
    const onClickItem = () => {
        onDelete(id);
    };
    const onClickModifyItem = () => {
        setIsEditing(true);
    };
    const onSubmitEdit = () => {
        if (newContent.trim() === '') {
            alert('내용을 입력해주세요.');
            return;
        }
        onUpdate(id, { content: newContent });
        setIsEditing(false);
    };
    const onCancelEdit = () => {
        setIsEditing(false);
        setNewContent(content);
    };

    const onChangeEditContent = (e) => {
        setNewContent(e.target.value);
    };

    return (
        <div className="listItem">
            <input
                readOnly
                onChange={onChangeCheckBox}
                checked={isDone}
                type="checkbox"
            />
            {isEditing ? (
                <div className="editMode">
                    <input type="text" value={newContent} onChange={onChangeEditContent}/>
                    <button onClick={onSubmitEdit}>저장</button>
                    <button onClick={onCancelEdit}>취소</button>
                </div>
            ) : (
                <>
                    <p className="content">{content}</p>
                    <p className="author">작성자: {author}</p>
                    <p className="date">{new Date(date).toLocaleDateString()}</p>
                    <button onClick={onClickModifyItem}>수정</button>
                    <button onClick={onClickItem}>삭제</button>
                </>
            )}
        </div>
    );
};

export default ListItem;
