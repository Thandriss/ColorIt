import 'src/components/LeftBar.css'
import React from "react";
import applyColors from "../Apply.jsx";

// import React from "react";

export default class LeftBar extends React.Component{

    async getData(){
        const data = {
            model: "default",
            input: ["N", "N", "N", "N", "N"]
        };
        try {
            await fetch("http://colormind.io/api/", {
                method: "POST",
                body: JSON.stringify(data)
            }).then((response) => response.json())
                .then(async (json) => {
                    console.log(json.result)
                    for (let i = 0; i !== json.result.length; i++) {
                        let name = "colorNum" + (i + 1);
                        let field = "colorField" + (i + 1);
                        let hex = "#" + (1 << 24 | json.result[i][0] << 16 | json.result[i][1] << 8 | json.result[i][2]).toString(16).slice(1);
                        document.getElementsByClassName(name.toString())[0].innerHTML = hex;
                        document.getElementsByClassName(field.toString())[0].style.background = hex;
                    }
                });
        } catch (error) {
            console.error("Error:", error);
        }
    }


    render() {
        return (
            <>
                <div className="leftBar">
                    <div className="objectsBar">
                        <ul className="listOfObjects">
                            <table>
                                <thead>
                                Objects
                                </thead>

                                <tbody align="center">

                                </tbody>
                                {this.props.listOfObjects.map(object =>(
                                    <tr key="1">
                                        <td>{object}</td>
                                        <td><input id="color" type ="text" ></input></td>
                                    </tr>
                                ))}
                                <tfoot>
                                <tr>
                                </tr>
                                </tfoot>
                            </table>
                        </ul>
                    </div>
                    {/*<button className="applyButton" >Apply</button>*/}
                    <button className="applyButton" onClick={() => applyColors(document.querySelectorAll("[id ='color']"), this.props.objString, this.props.camera, this.props.rend, this.props.obj, this.props.scene)}>Apply</button>
                    <div className="colorBar">

                            <table>
                                <thead>
                                Colors
                                </thead>
                                <div className="colors">
                                    <tbody align="center">
                                    <tr>
                                        <td><div id={"colorField"} className="colorField1"></div></td>
                                        <td><div id={"colorField"} className="colorField2"></div></td>
                                        <td><div id={"colorField"} className="colorField3"></div></td>
                                        <td><div id={"colorField"} className="colorField4"></div></td>
                                        <td><div id={"colorField"} className="colorField5"></div></td>
                                    </tr>
                                    </tbody>
                                    <tr>
                                        <td id={"colorNum"} className="colorNum1">text</td>
                                        <td id={"colorNum"} className="colorNum2">text</td>
                                        <td id={"colorNum"} className="colorNum3">text</td>
                                        <td id={"colorNum"} className="colorNum4">text</td>
                                        <td id={"colorNum"} className="colorNum5">text</td>
                                    </tr>
                                    <tfoot>
                                    <tr>
                                    </tr>
                                    </tfoot>
                                </div>
                            </table>
                    </div>
                    <button className="genButton" onClick={this.getData}>Generate</button>
                </div>
            </>
        )
    }
}
LeftBar.defaultProps = {listOfObjects: ['']}