import React, { Component } from "react";
import "../../left/OperationItem.css"
import {Link} from "react-router-dom";

const arr = [
    [ "开票申请", "金票融资", "金票查询" ],
    [ "开票审核", "融资审核" ],
    [ "企业信息", "企业认证" ]
];


class OperationItem extends Component {

    render() {
        return (
            <div className="items"
                 style={this.props.show ? {display: "block"} : {display : "none"}}>
                <ul>
                    {
                        arr[this.props.order].map((item, index) =>
                            <li key={this.props.order * 10 + index}>
                                <Link to={"/factor/detail" + (this.props.order * 10 + index)} className="link">
                                    {item}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }

}

export default OperationItem;