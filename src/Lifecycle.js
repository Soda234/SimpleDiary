import { useEffect, useState  } from "react";

const Lifecycle = () => {

    const [count, setCount ] = useState(0)
    const [text, setText] = useState("")

    useEffect(() =>{
        console.log("Mount")
    }, [count])

    return(
        <div style={{padding:20}}>
            <div>
            {count}
            <button onClick={() => setCount((count) => count + 1 )}>+</button>
            </div>
            <div>
            
            <input value={text} onChange={(e) => setText(e.target.value) } />
            </div>
        </div>
    )
}

export default Lifecycle;