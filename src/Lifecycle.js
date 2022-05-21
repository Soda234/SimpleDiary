import { useEffect, useState  } from "react";

const UmmountTest = () => {
    return (
    <div>
      Unmount Testing Component
    </div>
    )
}

const Lifecycle = () => {

    const [isVisable, setIsVisiable] = useState(false);

    const toggle = () => {setIsVisiable(!isVisable)}

/*     const [count, setCount ] = useState(0)
    const [text, setText] = useState("")

    useEffect(() =>{
        console.log("Mount")
    }, [])

    useEffect(() =>{
        console.log("Update")
    }, )

    useEffect(() =>{
        console.log(`Count is Update : ${count}`)

        if(count > 5){
            alert("5가 넘어갑니다.")
            setCount(1)
        }
    }, [count])

    useEffect(() =>{
        console.log(`Text is Update : ${text}`)
    }, [text]) */

    return(
        <div style={{padding:20}}>
          <button onClick={toggle}>ON/OFF</button>
          {isVisable && <UmmountTest />}
        </div>
    )
}

export default Lifecycle;