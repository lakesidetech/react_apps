import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Car extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return <h2>I am a {this.state.color} Car!</h2>;
    }
  }      
  ReactDOM.render(<Car />, document.getElementById('root'));


  //ReactDOM.render(myelement2, document.getElementById('root'));
  

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
