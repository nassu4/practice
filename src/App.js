import React, { Component } from "react";
import "./App.css";
import Top from "./top/Top.js";
import Left from "./left/Left.js"
import Right from "./right/Right";

class App extends Component {

    render() {
        return (
            <div id="app">
                <Top />
                <Left />
                <Right />
            </div>
        );
    }

}

export default App;
