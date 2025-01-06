import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../App";
import { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const New = () => {
  const [params, setParams] = useSearchParams();
  const nav = useNavigate();
  const {onCreate} = useContext(DiaryDispatchContext);
  
  const onSubmit = (input)=>{
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    //뒤로가기 기능을 막으면서 페이지이동
    nav("/",{replace:true});  
  }; 

    return (
      <div>
        <Header  title={"새 일기 쓰기"} left={<Button onClick={()=>{ nav(-1)}} text={"< 뒤로 가기"} />} />
        <Editor onSubmit={onSubmit} />
        <h4>쿼리스트링으로 넘어오는값{params.get('value')}</h4>
      </div>
    );
  };

  export default New;
  