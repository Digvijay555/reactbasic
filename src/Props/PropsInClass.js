import React,{Component} from 'react'

// use props in class components
// we used this.props.attribute to access props in class components

class PropsInClas extends Component{
    render(){
        return(
            <h1>Hello {this.props.name} and class is {this.props.class}</h1>
        )
    }
}

export default PropsInClas