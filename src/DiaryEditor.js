import {useRef, useState } from 'react';
import './App.css';

const DiaryEditor = ({onCreate}) => {

    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author : "",
        content : "",
        emotion : 1
    })

    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () =>{
        if(state.author.length < 1){
            authorInput.current.focus()
            alert("작성자는 1글자 이상 입력해 주세요.")
            return;
        }

        if(state.content.length < 5){
            alert("일기 본문은 최소 5글자 이상 입력해 주세요.")
            contentInput.current.focus()
            return;
        }
        onCreate(state.author, state.content, state.emotion)
        alert("저장 성공")
        setState({
            author : "",
            content : "",
            emotion : ""
        })
    }

    const [author, setAuthor] = useState("홍요환");
    const [content, setContent] = useState("")

    return  (
        <div className='DiaryEditor'>
            <h2>오늘의 일기</h2>
            <input ref={authorInput} value={state.author || ""} onChange={(e) => {
                setState({
                    ...state,
                    author : e.target.value, 
                                
                })
            }}/>
            <div>
                <textarea ref={contentInput} value={state.content || ""} onChange={(e) =>{
                     setState({
                        ...state,
                        content : e.target.value,                   
                    })
                }} />
            </div>
            <div>
                <select name='emotion' value={state.emotion} onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}> 저장 </button>
            </div>

        </div>
    )
}

export default DiaryEditor;
