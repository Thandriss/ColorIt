import './App.css'
import LeftBar from 'src/components/LeftBar.jsx'
import Main from "./components/Main.jsx";
import React from "react";
// import React, {useState} from "react";
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            objString: String,
            camera: Object,
            rend: Object,
            obj: Object,
            scene: Object
        };
        this.updateData = this.updateData.bind(this);
    }

    updateData = (names, file, camera, rend, obj, scene) =>{
        this.setState({
            list: names,
            objString: file,
            camera: camera,
            rend: rend,
            obj: obj,
            scene:scene
        })
        console.log("handle")
        console.log(names)
        console.log(file)
    }
    render() {
        return (
            <>
                <div className="background">
                    <LeftBar listOfObjects={this.state.list} objString={this.state.objString} camera={this.state.camera} rend={this.state.rend} obj={this.state.obj} scene={this.state.scene}/>
                    <Main updateData={this.updateData}/>
                </div>
            </>
        )
    }
}

export default App
