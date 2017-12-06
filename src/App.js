import React, { Component } from 'react';
import io from "socket.io-client";

io.connect();

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
    if (this.state.message != '')
    {

    }

  }

  render() {
    return (
      <div className="App">
      <div> Press Alt + Enter to submit message </div>
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
