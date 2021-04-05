import React, { Component } from "react"
import Mycity from './mycity'
import Myself from './myself'
// import Weather from "./weather"

import './App.css';
// import Weather from "./weather";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: 'm'
    }
  }

  render() {
    return (
      <div className="App">
         <div className="menu" >           
          <p><h className="menu-item" onClick={() => this.setState({ selectedMenu: 'm' })}>About Me</h>             
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        
          <h className="menu-item" onClick={() => this.setState({ selectedMenu: 'b' }) }>My City</h></p>
        </div>

        {this.state.selectedMenu === 'b' ? <Mycity/> : <Myself/>         
        }
      </div>
    );
  }
}


export default App;