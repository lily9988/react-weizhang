import React, { Component } from 'react';
import './App.css';
import Car from './component/car.js';
import Addcar from './component/addcar.js';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

      <section className="switchcar_wrap">
        <Car source="https://api.github.com/users/octocat/gists" />
        <Addcar />
      </section>


    );
  }
}

export default App;
