import React, { Component } from 'react';
import socketIo from 'socket.io-client';

const socket = socketIo.connect();

const form = {
  padding: '3px',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};
const forminput = {
  border: '2',
  padding: '10px',
  width: '90%',
};

const button = {
  padding: '10px',
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messages: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      socket.emit('updateMessages', { data: 'null' }, (responseData) => {
        this.setState({ messages: responseData });
      });
    }, 1000);
    document.body.style.backgroundColor = '#e6f7ff';
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  submitMessage(event) {
    event.preventDefault();
    if (this.state.message !== '') {
      console.log(this.state.message);
      socket.emit('receiveClientMessage', this.state.message);
      this.setState({ message: '' });
    }
  }

  render() {
    return (
      <div className="App">
        <ul id="messages">{this.state.messages.map(message => <li>{message}</li>)}</ul>
        <form style={form} onSubmit={this.submitMessage}>
          <input style={forminput} value={this.state.message} onChange={this.handleChange} />
          <button style={button} type="submit" value="Send">Send</button>
        </form>
      </div>
    );
  }
}

export default App;
