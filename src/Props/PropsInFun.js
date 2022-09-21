import React from 'react'

// use props in function component
// props is a object which contain data which we have to pass in another components

function PropsInFun(props){
    return(
        <>
        <h1>Hello {props.name} class is {props.class}</h1>
        {props.children}
        </>
    )
}

export default PropsInFun