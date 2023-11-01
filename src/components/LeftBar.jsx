import "./LeftBar.css"
import React from "react";
import applyColors from "../Apply.jsx";


export default class LeftBar extends React.Component{

    async getData(){
        console.log('upload');
        let len = 6;
        let output = '';
        for (let i = 0; i < len; ++i) {
            output += (Math.floor(Math.random() * 16)).toString(16);
        }
        let hex =output.toUpperCase();
        console.log(hex)
        try {
            await fetch("https://www.thecolorapi.com/scheme?hex="+hex +"&format=json&mode=analogic&count=5", {
                method: "GET",
            }).then((response) => response.json())
                .then(async (json) => {
                    const colors = json.colors.map(color => color.hex.value);
                    for (let i = 0; i !== colors.length; i++) {
                        let name = "colorNum" + (i + 1);
                        let field = "colorField" + (i + 1);
                        document.getElementsByClassName(name.toString())[0].innerHTML = colors[i];
                        document.getElementsByClassName(field.toString())[0].style.background = colors[i];
                    }
                });
        } catch (error) {
            console.error("Error:", error);
        }
    }
    check()
    {
        let checkboxes = document.getElementsByClassName("modeButton");
        let choosen = 0;
        for(let i = 0; i < checkboxes.length; i++)
        {
            if(checkboxes[i].checked === true)
            {
                choosen = i;
            }
        }
        for(let i = 0; i < checkboxes.length; i++)
        {
            if(i !== choosen)
            {
                checkboxes[i].checked = false
            }
        }
        let falseCheck = false;
        checkboxes = document.getElementsByClassName("modeButton");
        for(let i = 0; i < checkboxes.length; i++)
        {
            if(checkboxes[i].checked === false)
            {
                falseCheck = false;
            }
            else {
                falseCheck = true;
            }
        }
        if (!falseCheck) {
            checkboxes[0].checked = true;
        }
        checkboxes = document.getElementsByClassName("modeButton");
        for(let i = 0; i < checkboxes.length; i++)
        {
            if(checkboxes[i].checked === true)
            {
                choosen = i;
            }
        }
        for(let i = 0; i < checkboxes.length; i++)
        {
            if(i !== choosen)
            {
                checkboxes[i].checked = false
            }
        }
        // //set checked of clicked object
        // input.checked = input.checked !== true;
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
                                    <tr key="1"><td>{object}</td><td><input id="color" type ="text"></input></td></tr>
                                ))}
                                <tfoot>
                                <tr>
                                </tr>
                                </tfoot>
                            </table>
                        </ul>
                    </div>
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
                                        <td data-testid= "el" id={"colorNum"} className="colorNum1">text</td>
                                        <td data-testid= "el" id={"colorNum"} className="colorNum2">text</td>
                                        <td data-testid= "el" id={"colorNum"} className="colorNum3">text</td>
                                        <td data-testid= "el" id={"colorNum"} className="colorNum4">text</td>
                                        <td data-testid= "el" id={"colorNum"} className="colorNum5">text</td>
                                    </tr>

                                    <tfoot>
                                    <tr>
                                    </tr>
                                    </tfoot>
                                </div>
                            </table>
                        <div>
                            <table>
                                <thead>
                                Mode
                                </thead>
                                <body>
                                <div>
                                    <tr>
                                        <td><label className="mode"><input type="checkbox" className="modeButton" defaultChecked={true} onClick={() =>this.check(this)}/>analogic</label></td>
                                        <td><label className="mode"><input type="checkbox" className="modeButton" onClick={() =>this.check(this)}/>complement</label></td>
                                        <td><label className="mode"><input type="checkbox" className="modeButton" onClick={() =>this.check(this)}/>triad</label></td>
                                        <td><label className="mode"><input type="checkbox" className="modeButton" onClick={() =>this.check(this)}/>quad</label></td>
                                        <td><label className="mode"><input type="checkbox" className="modeButton" onClick={() =>this.check(this)}/>monochrome</label></td>
                                    </tr>
                                </div>
                                </body>
                            </table>
                        </div>
                    </div>
                    <button role="gen" className="genButton" onClick={this.getData}>Generate</button>
                </div>
            </>
        )
    }
}
LeftBar.defaultProps = {listOfObjects: ['']}