import React,{Component} from "react"
import {render} from "react-dom"
import HomePage from "./Homepage"

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className='center'>
            <HomePage/>
        </div>;
    }
}

render(<App/>,document.querySelector('#app'))