import React, { Component } from "react";
import "./OperationItem.css"

const arr = [
    [ "开票申请",  "金票融资", "金票转让", "金票查询"],
    [ "开票签收",  "放款签收", "转让签收"]
];


class OperationItem extends Component {

    render() {
        return (
            <div className="items"
                 style={this.props.show ? {display: "block"} : {display : "none"}}>
                <ul>
                    {
                        arr[this.props.order].map((item, index) =>
                            <li key={index}>{item}</li>
                        )
                    }
                </ul>
            </div>
        );
    }

}

export default OperationItem;