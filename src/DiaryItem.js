import { useState } from 'react';

const DiaryItem = ({onRemove, id, author, content, emotion, created_date}) => {
    
    const [isEdit, setisEdit] = useState(false)
    const toggleisEdit = () => {        
        setisEdit(!isEdit)
        if(isEdit){
            setLocalContent(content)
        }
    }

    const [localContent, setLocalContent] = useState("")

    const handleRemove = () => {
        if(window.confirm(`${id}번째 아이디를 삭제하시겠습니까?`)){
            onRemove(id)
        }
    }
    return(
        <div className="DiaryItem">
             <div>작성자 : {author} </div>
                 <div>감정 : {emotion} </div>
                 <div className="date">작성 시간(ms) : {new Date(created_date).toLocaleString()} </div>
             <div className="Info">
                       
                 </div> 
                <div className="content">
                    {isEdit ? <div>
                        <textarea
                             value={localContent}
                             onChange={(e) => {
                                 setLocalContent(e.target.value)
                             }}/> 
                             </div> 
                             :  content}
                     </div>
                <button  onClick={handleRemove}> 삭제 </button>
               {/*  {isEdit ? 
                 
                :
                } */}
                <button onClick={toggleisEdit}>{isEdit ? "수정취소" : "수정"}</button>
        </div>
    )
}

export default DiaryItem;