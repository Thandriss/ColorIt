import './App.css'
import LeftBar from './components/LeftBar.jsx'
import Main from "./components/Main.jsx";
import React from "react";
// import React, {useState} from "react";
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            objString: String
        };
        this.updateData = this.updateData.bind(this);
    }

    updateData = (value1, value2) =>{
        this.setState({
            list: value1,
            objString: value2
        })
        console.log("handle")
        console.log(value1)
        console.log(value2)
    }
    render() {
        return (
            <>
                <div className="background">
                    <LeftBar listOfObjects={this.state.list} objString={this.state.objString()}/>
                    <Main updateData={this.updateData}/>
                </div>
            </>
        )
    }
}

export default App
