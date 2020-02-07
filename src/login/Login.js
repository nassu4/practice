import React, { Component } from "react";
import Identify from "./Identity";
import "./Login.css"
import {Link} from "react-router-dom";

class Login extends Component {

    render() {
        return (
            <div id="loginPage">
                <div id="logo">供应链金融</div>
                <div id="form">
                    <form>
                        <div id="head">账号登录</div>
                        <div id="accountRow">
                            <div className="border">
                                <span id="account">账号</span>
                                <input type="text" placeholder="请输入手机号" />
                            </div>
                        </div>
                        <div id="passwordRow">
                            <div className="border">
                                <span id="password">密码</span>
                                <input type="password" placeholder="请输入密码" />
                            </div>
                        </div>
                        <div id="codeRow">
                            <input type="text" id="code" placeholder="请输入验证码" />
                            <Identify />
                        </div>
                    </form>
                    <button value="login"><span>登陆</span></button>
                    <div id="login">
                        <Link to={"/register"} className="link">注册</Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default Login;
