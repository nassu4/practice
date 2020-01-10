import React, { Component } from "react";
import "./Left.css"
import CategoryItem from "./CategoryItem";


class Left extends Component {

    render() {
        return (
            <div id="nav">
                <ul>
                    <CategoryItem order="0" changePage={this.props.changePage} />
                    <CategoryItem order="1" changePage={this.props.changePage} />
                    <li key="2">
                        <a href="localhost:3000">用户中心</a>
                    </li>
                </ul>
            </div>
        );
    }

}

export default Left;