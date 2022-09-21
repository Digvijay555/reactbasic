import React,{Component} from 'react';
import ChildComponents from './ChildComponents'
class ParentComponents extends Component{

    constructor(){
        super()

        this.state={
            parent:"parents"
        }
        this.GreetHandler = this.GreetHandler.bind(this);
    }
    GreetHandler(){
        alert(`Hii ${this.state.parent}`)
    }
    render(){
        return(
            <div>
            <ChildComponents GreetHandler={this.GreetHandler}/>
            </div>
        )
    }
}
export default ParentComponents