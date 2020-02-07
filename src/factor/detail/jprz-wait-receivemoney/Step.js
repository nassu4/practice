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
            title: '融资已受理',
            description: '日期：2019-12-26         操作人：xxx保理商 —— 李四四'
        }, {
            title: '已放款',
            description: '日期：2019-12-27         操作人：xxx保理商 —— 李四四'
        }, {
            title: '待收款'
        }].map((s, i) => <Step key={i} title={s.title} description={s.description} status={s.status}/>);

        return (
            <div>
                <h3>融资进度</h3>
                <div className="out-border">
                    <div className="step">
                        <Steps size="small" direction="vertical" current={3}>{steps}</Steps>
                    </div>
                </div>
            </div>
        );
    }

}

export default Step;