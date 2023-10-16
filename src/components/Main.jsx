import './Main.css'
import React from "react";
import Display from "../Display.jsx";
// import axios from "axios";
export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // selectedFile: [],
            // objectNames: [],
        };
    }
    objNames;
    onFileChange = event => {
        document.getElementsByClassName("rightBar")[0].style.display = "none";
        let files = event.target.files[0];
        let byteArray = this.readFileDataAsBase64(files);
        console.log(files)
        console.log(byteArray);
        let dis = new Display();
        byteArray.then(value => {
            return (
                <>
                    <div className="rightScreen">
                        <script type={"module"} src={dis.display(value)}></script>
                        {this.objNames = dis.getNames()}
                        <script onChange={this.props.updateData(this.objNames, value)}></script>
                    </div>
                </>
            )
        });
    };


    readFileDataAsBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                resolve(event.target.result);
            };

            reader.onerror = (err) => {
                reject(err);
            };

            reader.readAsText(file);
        });
    }


    render() {
        console.log("render")
        return (
            <div className="rightBar">
                <input type={"file"} id="file" className="upload-model" accept=".obj" onChange={this.onFileChange} ></input>
                <label htmlFor="file" className="filelable">Choose a file</label>
            </div>
        );
    }
}

