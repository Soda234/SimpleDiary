import DiaryItem from "./DiaryItem";

const DiarytList = ({onRemove, dummyList}) => {
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{dummyList.length}개의 일기가 있습니다</h4>
            <div>
             {dummyList.map((value) => (
                 <DiaryItem key={value.id} {...value} onRemove={onRemove} />                 
             ))}
            </div>
        </div>
    )
}

DiarytList.defaultProps={
    dummyList : []
}

export default DiarytList;