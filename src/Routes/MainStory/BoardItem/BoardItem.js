import React from 'react';
import './BoardItem.css';

export default class BoardItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className="board_item">
                <div className="txt_area">
                    <span className="icon_new_txt">•</span>
                    <strong data-v-6c561ae5="" className="tit">고려의 건국파트 질문이요!</strong>
                    <div className="user_area">
                                    <span data-v-6c561ae5="" className="nick">
                                        <span className="ellip">bestannie06</span>
                                    </span>
                        <span className="time">13:12</span>
                        <span className="no">조회 0</span>
                    </div>
                </div>
            </li>
        )
    }
}