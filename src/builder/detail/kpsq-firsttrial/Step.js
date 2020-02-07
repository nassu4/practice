import React, {Component} from "react";
import {Steps, Modal, Button} from "antd";
import "./Step.css"

class Step extends Component {

    state = {
        loading: false,
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false, visible: false});
        }, 1500);
    };

    handleCancel = () => {
        this.setState({visible: false});
    };

    render() {
        const {visible, loading} = this.state;

        const Step = Steps.Step;

        const steps = [{
            title: '申请提交成功',
            description: '日期：2019-12-19         操作人：xxx施工公司 —— 张三'
        }, {
            title: '金票待初审'
        }].map((s, i) => <Step key={i} title={s.title} description={s.description} status={s.status}/>);

        return (
            <div>
                <h3>开票进度</h3>
                <div className="out-border">
                    <div className="step">
                        <Steps size="small" direction="vertical" current={1}>{steps}</Steps>
                    </div>
                    <input type="button" value="驳回" className="reject" onClick={this.showModal}/>
                    <input type="button" value="通过" className="pass"/>

                    <Modal
                        visible={visible}
                        title="驳回理由"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>
                                返回
                            </Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                                提交
                            </Button>,
                        ]}
                    >
                        <textarea placeholder="请在此输入驳回理由" className="reason"/>
                    </Modal>

                </div>
            </div>
        );
    }

}

export default Step;