import './Main.css'
import display from "../Display.jsx";
import React from "react";
// import axios from "axios";
export default class Main extends React.Component{
    state = {
        selectedFile: null
    };

    onFileChange = event => {
        document.getElementsByClassName("rightBar")[0].style.display = "none";
        // document.getElementsByClassName("rightScreen")[0].style.display = "block";
        let files = event.target.files[0];
        let byteArray = this.readFileDataAsBase64(files);
        console.log(files)
        console.log(byteArray);
        byteArray.then(value => {
            return (
                <div className="rightScreen" >
                    <script type={"module"} src={display(value)}></script>
                </div>
            );
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

