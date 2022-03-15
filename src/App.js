import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

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
  return (
    <div>
     <DiaryEditor />
     <DiaryList dummyList={dummyList}/>
    </div>
  );
}

export default App;
