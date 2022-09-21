import React from "react";

function ChildComponent(props){
    return(
        <div>
        <button onClick={props.GreetHandler}>Click</button>
        </div>
    )
}
export default ChildComponent