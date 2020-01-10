import React, { Component } from "react";
import "./OperationItem.css"

const arr = [
    [ "开票申请",  "金票融资", "金票转让", "金票查询"],
    [ "开票签收",  "放款签收", "转让签收"]
];


class OperationItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    render() {
        return (
            <div className="items"
                 style={this.props.show ? {display: "block"} : {display : "none"}}>
                <ul>
                    {
                        arr[this.props.order].map((item, index) =>
                            <li key={this.props.order * 10 + index}
                                order = {this.props.order * 10 + index}
                                onClick={this.handleClick} >
                                {item}</li>
                        )
                    }
                </ul>
            </div>
        );
    }

    handleClick(e) {
        this.props.changePage(e.currentTarget.getAttribute("order"));
    }

}

export default OperationItem;