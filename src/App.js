import React, { Component } from 'react';
import socketIOClient from "socket.io-client";

const form = {
  padding: '3px',
  position: 'fixed', 
  bottom: '0',
  width: '100%'
};
const forminput = {
  border: '2',
  padding: '10px', 
  width: '90%'
};

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul id="messages"></ul>
      <form style ={form} action="">
        <input style = {forminput} id="m" autocomplete="off" /><button>Send</button>
      </form>
      </div>
    );
  }
}

export default App;
