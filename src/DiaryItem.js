import React, { useState, useRef, useEffect } from 'react';
import { DiaryDispatchcontext } from './App';
import { useContext } from 'react';

const DiaryItem = ({/* onRemove, onEdit, */ id, author, content, emotion, created_date}) => {
    

    const {onRemove, onEdit} = useContext(DiaryDispatchcontext)

    const [isEdit, setisEdit] = useState(false)
    const EditFocus = useRef();

    useEffect(() => {
        console.log(`${id}번 쨰 아이템 랜더`)
    })

    useEffect(() => {
        if(isEdit){            
            setLocalContent(content)  
            EditFocus.current.focus()
        }  

    }, [isEdit])
    
    const toggleisEdit = () => {  
        setisEdit(!isEdit)
      
    }

    const [localContent, setLocalContent] = useState("")


    
    const handleRemove = () => {
        if(window.confirm(`${id}번째 아이디를 삭제하시겠습니까?`)){
            onRemove(id)
        }
    }

    const handleEdit = () => {
        if(localContent.length < 5){
            alert("5글자 이상 입력해 주세요.")
            EditFocus.current.focus()
            return
        }

        onEdit(id, localContent)
        toggleisEdit(!isEdit)
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
                             ref={EditFocus}
                             value={localContent}
                             onChange={(e) => {
                                 setLocalContent(e.target.value)
                             }}/> 
                             </div> 
                             :  content}
                     </div>
                
               {  isEdit ? <>
                  <button onClick={toggleisEdit}>{isEdit ? "수정 취소" : "수정"}</button>
                  <button onClick={handleEdit}>{"수정 완료"}</button>
                  </>
                :
                <>
                <button  onClick={handleRemove}> 삭제 </button>
                <button onClick={toggleisEdit}>{isEdit ? "수정 취소" : "수정"}</button> 
                </>
                }
        </div>
    )
}

export default React.memo(DiaryItem);