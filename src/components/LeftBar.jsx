import './LeftBar.css'
import React from "react";
// import React from "react";

export default class LeftBar extends React.Component{

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
                                        <td><input type ="text" value="#ffffff"></input></td>
                                    </tr>
                                ))}
                                <tfoot>
                                <tr>
                                </tr>
                                </tfoot>
                            </table>
                        </ul>
                    </div>
                    <button className="applyButton">Apply</button>
                    <div className="colorBar">
                        <table>
                            <thead>
                            Colors
                            </thead>

                            <tbody align="center">
                            <tr>
                                <td><div className="colorField"></div></td>
                                <td><div className="colorField"></div></td>
                                <td><div className="colorField"></div></td>
                                <td><div className="colorField"></div></td>
                                <td><div className="colorField"></div></td>
                            </tr>
                            </tbody>
                            <tr>
                                <td className="colorNum">text</td>
                                <td className="colorNum">text</td>
                                <td className="colorNum">text</td>
                                <td className="colorNum">text</td>
                                <td className="colorNum">text</td>
                            </tr>
                            <tfoot>
                            <tr>
                            </tr>
                            </tfoot>
                        </table> <div></div>
                    </div>
                    <button className="genButton">Generate</button>
                </div>
            </>
        )
    }
}
LeftBar.defaultProps = {listOfObjects: ['']}