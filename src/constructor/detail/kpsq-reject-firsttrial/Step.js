import React, {Component} from "react";
import {Steps} from "antd";
import "./Step.css"

class Step extends Component {

    render() {
        const Step = Steps.Step;

        const steps = [{
            title: '申请提交成功',
            description: '日期：2019-12-19         操作人：xxx施工公司 —— 张三'
        }, {
            title: '初审驳回',
            description: '日期：2019-12-20         操作人：xxx建设公司 —— 李四',
            status: "error"
        }].map((s, i) => <Step key={i} title={s.title} description={s.description} status={s.status}/>);
        return (
            <div>
                <h3>开票进度</h3>
                <div className="out-border">
                    <div className="step">
                        <Steps size="small" direction="vertical" current={1}>{steps}</Steps>
                    </div>
                    <input type="button" value="重新申请" className="again" />
                </div>
            </div>
        );
    }

}

export default Step;