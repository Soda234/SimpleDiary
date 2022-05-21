import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import React, { useRef, useMemo, useReducer } from 'react';
import Lifecycle from './Lifecycle';
import { useEffect } from 'react';
import OptimizeTest from './OptimizeTest';
import { useCallback } from 'react';


const dummyList = [
  {
  id:1,
  author:"신희준",
  content:"하이 1",
  emotion : 5,
  created_date : new Date().getTime()
},
{
  id:2,
  author:"이희지",
  content:"하이 2",
  emotion : 2,
  created_date : new Date().getTime()
},
{
  id:3,
  author:"고론",
  content:"하이 3",
  emotion : 4,
  created_date : new Date().getTime()
},

]

const reducer = (state, action) => {
 switch (action.type) {
   case 'INIT': {
     return action.data
   }

   case "CREATE": {
     const created_date = new Date().getTime();
     const newitem ={
       ...action.data,
       created_date
     }
     return [newitem, ...state]
   }

   case "REMOVE":
     return state.filter((it => it.id !== action.targetId))
  
   case 'EDIT' :

      return state.map((it) => it.id === action.targetId ? {...it, content:action.newContent} : it)
     
 
   default:
     return state
 }
}

export const DiaryStateContext = React.createContext()

export const DiaryDispatchcontext = React.createContext()

const App = () => {

 /*  const [data, setData] = useState([]); */

      const [data, dispatch] = useReducer(reducer, [])

  const dataid = useRef(0)

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {

   

    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) =>
     res.json()
    )

    const initData = res.slice(0, 20).map((it) =>{
      return {
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random() * 5) + 1,
        created_date : new Date().getTime(),
        id : dataid.current++
      }
    })

    dispatch({type:"INIT", data:initData})

   /*  setData(initData) */

  }

  const onCreate = useCallback((author, content, emotion) => {

    dispatch({type:"CREATE", data:{author, content, emotion, id:dataid.current}})
    
    /* const created_date = new Date().getTime()
    const newitem = {
      author,
      content,
      emotion,
      created_date,
      id : dataid.current
    } */
     dataid.current += 1
    /*  setData((data) => [newitem, ...data]) */
  }, [])

const onRemove = useCallback((targetId) => {

  dispatch({type:'REMOVE', targetId})
/* 
  setData(data => data.filter((e) => e.id !== targetId)) */
}, []) 

const onEdit = useCallback((targetId, newContent) => {

    dispatch({type:"EDIT", targetId, newContent})

       /*  setData(
         data  =>  data.map((data) => data.id === targetId ? {...data, content : newContent} : data)
        ) */
}, [])


const memoizedDispatches = useMemo(() => {
  return {onCreate, onRemove, onEdit}
}, [])

const getDiaryAnalysis = useMemo(() => {

   const goodCount = data.filter((it) => it.emotion >= 3).length
   const badCount = data.length - goodCount
   const goodRatio = (goodCount / data.length) * 100

   return {goodCount, badCount, goodRatio}
}, [data.length])

const {goodCount, badCount, goodRatio} = getDiaryAnalysis

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchcontext.Provider value={memoizedDispatches}>
   
    <div>
     {/* <Lifecycle /> */}
 {/*  <OptimizeTest/> */}
     <DiaryEditor /* onCreate={onCreate} *//>
     <div>전체 일기 :  {data.length}</div>
     <div>기분 좋은 일기 개수 : {goodCount}</div>
     <div>기분 안좋은 일기 개수 : {badCount}</div>
     <div>기분 안좋은 일기 비율 : {goodRatio}</div>
     <DiaryList /* onRemove={onRemove} onEdit={onEdit} */ dummyList={data}/> 
    
    </div>
    </DiaryDispatchcontext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
