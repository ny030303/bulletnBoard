import React from 'react';
import './EditPage.css';

export default class EditPage extends React.Component {

    constructor(props) {
        super(props);
    }
    gotoBack = () =>  this.props.history.push('/');
    render() {
        return(
            <div className="edit-page ">
                <div className="edit-header">
                    <button type="button" className="e-close-btn" onClick={this.gotoBack}>&times;</button>
                    <button type="button" className="btn btn-primary e-edit-btn">등록</button>
                </div>
                <div className="form-group ">
                    <label htmlFor="email">글제목</label>
                    <input type="email" className="form-control" id="email" placeholder="글제목을 입력하세요." name="email"/>
                    <label htmlFor="pwd">이름</label>
                    <input type="password" className="form-control" id="pwd" placeholder="이름을 입력하세요." name="pswd"/>
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                    </label>
                </div>
            </div>
        )
    }
}