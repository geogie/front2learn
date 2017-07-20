import React, { Component } from 'react';
import Header from "./components/Index/Header";
import './App.css';

export default class App extends Component {

  componentDidMount() {
    console.log(this.props.users)
  }

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <Header/>
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
