import React from 'react';
import './App.css';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import MainStory from "./Routes/MainStory/MainStory";
import LoginForm from "./Routes/LoginForm/LoginForm";
import SignUpForm from "./Routes/SignUpForm/SignUpForm";
import {deleteUser, getUser, logout} from "./services/DataService";
import eventService from "./services/EventService";
import EditPage from "./Routes/EditPage/EditPage";
const PrivateRoute = ({component: Component, authed, ...rest}) => (
    <Route
        {...rest}
        render={(props) =>
            (authed === true) ?
                (<Component {...props} />) :
                (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>)
        }/>
);

const LoginRoute = ({component: Component, authed, ...rest}) => (
    <Route
        {...rest}
        render={(props) =>
            (authed === true) ?
                (<Redirect to={{pathname: '/', state: {from: props.location}}}/>) :
                (<Component {...props} />)
        }/>
);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        authed: false,
    }
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.state.authed = this.userInfo ? true : false;
    eventService.listenEvent('loginStatus', logined => this.setState({authed: logined}));
  }
  componentDidMount() {
      // localStroage 에 없을 때
      if(this.userInfo == null) { logout(res => { });}
      // session 체크
      getUser(null, null, res => {
          if (res.result === 0) {
              localStorage.removeItem("userInfo");
              this.setState({authed: false});

          }
      });
  }
  render() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>

                    <PrivateRoute exact authed={this.state.authed} path="/" component={MainStory}/>
                    <PrivateRoute exact authed={this.state.authed} path="/edit" component={EditPage}/>
                    <LoginRoute exact authed={this.state.authed} path="/login" component={LoginForm}/>
                    <Route exact path="/signup" component={SignUpForm}/>
                </Switch>
            </HashRouter>
        </div>
    )
}
}

export default App;
