import React, { Component } from "react";
import Head from "./Head.js"
import "../../../right/Right.css"
import Step from "./Step";
import Info from "./Info";

class Right extends Component {

    render() {
        return(
            <div id="right">
                <Head />
                <Step />
                <Info />
            </div>
        )
    }

}

export default Right;