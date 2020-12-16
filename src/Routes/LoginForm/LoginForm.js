import React from 'react';
import './LoginForm.css';
import alertDialog from "../../services/AlertDialog/AlertDialog";
import eventService from "../../services/EventService";
import {getUser} from "../../services/DataService";

const loadImg = (url) => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(null);
        img.src = url;
    });
};


const createImgDataUrl = async (url) => {
    let img = await loadImg(url);
    if (img !== null) {
        let canvas = document.createElement("canvas");
        canvas.setAttribute("width", img.width);
        canvas.setAttribute("height", img.height);
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        return canvas.toDataURL();
    }
    return null;
};

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            userPwd: "",
            isAgree: false
        };
        this.count = null;
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    login = () => {
        if (this.state.userId === "" || this.state.userPwd === "") {
            alertDialog.show("알림", "값을 확인해 주시기 바랍니다.");
            return;
        }

        getUser(this.state.userId, this.state.userPwd, (data) => {
            // console.log("login getuser: ", data);
            if (data.result) {
                eventService.emitEvent("loginStatus", true);

                alertDialog.show("로그인", `반갑습니다 ${data.user.name}님`);
                this.props.history.push("/");

            } else {
                alertDialog.show("로그인 오류!", "로그인에 실패했습니다.");
            }

        });
    };

    changeId = (e) => this.setState({userId: e.target.value});
    changePwd = (e) => this.setState({userPwd: e.target.value});
    render() {
        return (
            <div className="loginForm" >
                <div id="mArticle">
                    <strong className="tit_intro">
                        <i className="fas fa-user"/>
                        <p>User Login</p>
                    </strong>
                    <div className="login_input_wrap">
                        <input type="text" className="tf_g" placeholder="아이디" onChange={this.changeId}/>
                        {/*<span className="ico_help ico_account" data-toggle="tooltip" title="Hooray!"/>*/}
                        <input type="password" className="tf_g" placeholder="비밀번호" onChange={this.changePwd}/>
                        {/*<button type="button" className="btn btn-default">Login</button>*/}
                    </div>

                    <div className="wrap_btn">
                        <button className="btn_g btn_comfirm" onClick={this.login}>로그인</button>
                    </div>
                    <div className="login_signUp_btn_wrap">
                        <div><span onClick={this.gotoSignup}>회원가입</span> &nbsp;&nbsp;|&nbsp;&nbsp; <span onClick={this.gotoSignup}>계정찾기</span></div>
                    </div>
                </div>


                <div className="login_footer">
                    <ul>
                        <li>이용약관</li>
                        <li>개인정보</li>
                        <li>처리방침</li>
                        <li>운영정책</li>
                        <li>고객센터</li>
                        <li>공지사항</li>
                    </ul>
                    <div className="txt_copyright">Copyright 2020. S-OIL inc. all rights reserved.</div>
                </div>
            </div>
        )
    }
}

export default LoginForm;