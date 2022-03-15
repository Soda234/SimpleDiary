const DiaryItem = ({author, content, emotion, created_date}) => {
    return(
        <div className="DiaryItem">
             <div>작성자 : {author} </div>
                 <div>감정 : {emotion} </div>
                 <div className="date">작성 시간(ms) : {new Date(created_date).toLocaleString()} </div>
             <div className="Info">
                       
                 </div> 
                <div className="content"> {content}  </div>
        </div>
    )
}

export default DiaryItem;