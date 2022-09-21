import React,{Component} from 'react'

// In this see how to use state in class components
// State is used to hold the data within components and change and use whenever we need


class useOfStateInClass extends Component{
    
    // we can state in constructor only
    constructor(){
        super()
            this.state={
                message:"welcome visitors"
            }
            
            // initialize the state
            this.state={
                count:1
            }
    }
    //function for change state in class components
    changeState(){
        this.setState({
            message:"Thanks for subscribing"
        })
    }
    likeIncrease(prevCount){
        this.setState({
            count: prevCount+1
        })
    }
    render(){
        return(
                <>
                    <h1>Hello {this.state.message}</h1>
                    <button onClick={()=>this.changeState()}>Subscribe</button>
                    <h1>Likes: {this.state.count}</h1>
                    <button onClick={()=> this.likeIncrease(this.state.count)}>Likes</button>
                </>
        )
    }
}

export default useOfStateInClass