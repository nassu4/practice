import React, {Component} from "react";
import {Steps} from "antd";
import "./Step.css"

class Step extends Component {

    render() {
        const Step = Steps.Step;

        const steps = [{
            title: '申请提交成功',
            description: '日期：2019-12-25         操作人：xxx施工公司 —— 张三三'
        }, {
            title: '申请驳回',
            description: '日期：2019-12-26         操作人：xxx保理商 —— 李四四',
            status:"error"
        }].map((s, i) => <Step key={i} title={s.title} description={s.description} status={s.status}/>);

        return (
            <div>
                <h3>融资进度</h3>
                <div className="out-border">
                    <div className="step">
                        <Steps size="small" direction="vertical" current={1}>{steps}</Steps>
                    </div>
                </div>
            </div>
        );
    }

}

export default Step;