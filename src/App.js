import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useState, useRef } from 'react';

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

const App = () => {

  const [data, setData] = useState([]);

  const dataid = useRef(0)

  const onCreate = (author, content, emotion) => {
    
    const created_date = new Date().getTime()
    const newitem = {
      author,
      content,
      emotion,
      created_date,
      id : dataid.current
    }
     dataid.current += 1
     setData([newitem, ...data])
  }

const onRemove = (targetId) => {
  const newData = data.filter((e) => e.id !== targetId)
  setData(newData)
} 

  return (
    <div>
     <DiaryEditor onCreate={onCreate}/>
     <DiaryList onRemove={onRemove} dummyList={data}/>
    </div>
  );
}

export default App;
