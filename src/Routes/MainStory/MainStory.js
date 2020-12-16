import React from 'react';
import './MainStory.css';
import BoardItem from "./BoardItem/BoardItem";

class MainStory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.state && this.state.postList !== prevState.state.postList) {

        }
    }

    gotoEditPage = () =>  this.props.history.push('/edit');

    render() {
        //console.log(this.state.postList);
        return (
            <div className="mainStory">
                {/*<WritingContainer getPostEvent={this.getPostEvent}/>*/}
                <section className="main-visual" style={{background: 'linear-gradient(to left, #4776e6, #8e54e9)'}}>
                    <i className="fas fa-search v-search-btn"/>
                    <div className="v-title">안전관리 당직일지</div>
                    <i className="far fa-edit v-edit-btn" onClick={this.gotoEditPage}/>
                </section>
                <div className="feed">
                    <ul className="board_list">
                        <BoardItem/>
                        <BoardItem/>
                        <BoardItem/>
                        <BoardItem/>
                        <BoardItem/>
                        <BoardItem/>
                    </ul>

                    {/*    {*/}
                    {/*        this.state.postList.map((v, i) => (*/}
                    {/*            <LazyLoad key={i} placeholder={<StoryItemLoading/>}>*/}
                    {/*                <StoryItem key={i} postData={v} arrnum={i}*/}
                    {/*                           userData={this.state.userList}*/}
                    {/*                           updatePostEvent={this.updatePostEvent}*/}
                    {/*                           deletePostEvent={this.deletePostEvent}/>*/}
                    {/*            </LazyLoad>*/}
                    {/*        ))*/}
                    {/*    }*/}
                </div>
            </div>
        )
    }
}

export default MainStory;