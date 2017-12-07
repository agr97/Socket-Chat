import React, { Component } from 'react';
import socketIo from "socket.io-client";

var socket = socketIo.connect();
socket.on('receiveServerMessages', (messages) => {
  console.log(messages);
})

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
  constructor(props) {
    super(props);
    this.state = {message: '', messages: []};
  
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  submitMessage(event) {
    event.preventDefault();
    if (this.state.message !== '') {
      console.log(this.state.message);
      socket.emit('receiveClientMessage', this.state.message);     
      this.setState({message: ''});
    }
  }



  render() {
    return (
      <div className="App">
      <ul id="messages"></ul>
      <form style ={form} onSubmit={this.submitMessage}>
        <input style = {forminput} value={this.state.message} onChange={this.handleChange} />
        <button type="submit" value="Send">Send</button>
      </form>
      </div>
    );
  }
}

export default App;
