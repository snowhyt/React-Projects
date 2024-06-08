import React, {useState} from "react";



function Content(){
    const [count, setCount] = useState (0)
    return(
<div className="">
    <h1 className="font-bold">{count}</h1>
    <h1 onClick={() => setCount(count + 1)}>
        Plus
    </h1>

    <h1 onClick={() => setCount(count -1)}>
        Minus
    </h1>
        
</div>

    );
}
export default Content;