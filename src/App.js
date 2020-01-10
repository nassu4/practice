import React, { Component } from "react";
import "./App.css";
import Top from "./top/Top.js";
import Left from "./left/Left.js"
import Right from "./right/Right";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { page : "0" };
        this.changePage = this.changePage.bind(this);
    }


    render() {
        let right;

        if (this.state.page === "0")
            right = <Right />
        else
            right = <h1>正在添加</h1>


        return (
            <div id="app">
                <Top />
                <Left changePage={this.changePage} />
                { right }
            </div>
        );
    }

    changePage(page) {
        this.setState({
            page : page
        });
    }

}

export default App;
