import React, { Component } from 'react';
import './App.css';
import {registerAction, loginAction} from '../../redux/action/users';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Header from "../../components/Index/Header";


class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <Header registerActions={this.props.registerActions} loginActions={this.props.loginActions}
                  auth={this.props.auth} users={this.props.users}/>
        </div>
        <div className="App-body">
          <div className="welcome-view">
            <div className="category-nav">
              <div>category-nav</div>
            </div>
            <div className="main">main</div>
            <div className="sidebar">sidebar</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
  return { users: state.users }
},
  (dispatch) => {
  return {
    registerActions: bindActionCreators(registerAction, dispatch),
    loginActions: bindActionCreators(loginAction, dispatch),
  }
})(App);
