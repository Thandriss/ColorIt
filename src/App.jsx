import './App.css'
import LeftBar from './components/LeftBar.jsx'
import Main from "./components/Main.jsx";
import React from "react";
// import React, {useState} from "react";
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.updateData = this.updateData.bind(this);
    }

    updateData = (value) =>{
        this.setState({
            list: value
        })
        console.log("handle")
        console.log(value)
    }
    render() {
        return (
            <>
                <div className="background">
                    <LeftBar listOfObjects={this.state.list}/>
                    <Main updateData={this.updateData}/>
                </div>
            </>
        )
    }
}

export default App
