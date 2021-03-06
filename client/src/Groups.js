import React, { Component } from 'react';
import logo from './OnTrak.png';
import avatar from './User.svg';
import bell from './Bell.svg';
import './Groups.css';
import { Link, Route, HashRouter, Router, Switch, Redirect } from 'react-router-dom';

class Group extends Component {

    render() {
      return (
       

      <div className="App" id="app-div">
      
        <header>
            <img src={logo} className="logo" />
            <a href="#"><img src={avatar} className="avatar" /></a>
            <a href="#"><img src={bell} className="bell" /></a>
            
            
        </header>
      
        <div className="mainContainer">
          <div className="content">

            <h1>My Groups</h1>

            <div className="currentGroups">
              <h3 style={{color:'#2699FB'}}>Current</h3>
            </div>

            <div className="pastGroups">
              <h3 style={{color:'#2699FB'}}>Past</h3>
            </div>  

          </div>
          
        </div>
        
      </div>
      
      );
    }
  }
  
  export default Group;
  