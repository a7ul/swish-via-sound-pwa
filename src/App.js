import React, { Component } from "react";
import "./App.css";
import { TextInput } from "./components/TextInput";
import { Button } from "./components/Button";
const { Chirp, toAscii } = window.ChirpConnectSDK;
const CHIRP_KEY = "CDaBCdc2B82eA2BCFf2f55cfD";
console.log(CHIRP_KEY);
class App extends Component {
  state = {
    text: "",
    chirpState: null,
    receivedText: null
  };

  componentDidMount = async () => {
    this.sdk = await Chirp({
      key: CHIRP_KEY,
      onStateChanged: (previous, current) => {
        this.setState(() => ({ chirpState: current }));
      },
      onReceived: data => {
        if (data.length > 0) {
          const text = toAscii(data);
          return this.setState(() => ({ receivedText: text }));
        } else {
          this.setState(() => ({ receivedText: null }));
        }
      }
    });
  };

  send = () => {
    if (!this.sdk) {
      return console.error("sdk not yet initialised.. please wait");
    }
    this.sdk.send(this.state.text);
  };

  onTextChange = text => {
    this.setState(() => ({ text }));
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div>CHIRP STATUS: {this.state.chirpState || "Not Initialised"}</div>
        <br />
        <hr />
        <br />

        <div>
          Enter text to send:
          <TextInput onChange={this.onTextChange} value={this.state.text} />
        </div>
        <div>
          <Button onClick={this.send}>Send</Button>
        </div>

        <br />
        <hr />
        <br />
        <i>(Send data from another tab to receive here)</i>
        <div>Received Text: {this.state.receivedText || "Listening...."}</div>
      </div>
    );
  }
}

export default App;
