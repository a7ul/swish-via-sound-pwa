import React from "react";
const { Chirp, toAscii } = window.ChirpConnectSDK;
const CHIRP_KEY = "5442954CfaAE356FCA8Df2E2F";

export class Result extends React.Component {
  state = {
    chirpState: null
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
          console.log("received", text);
        }
      }
    });
    this.sdk.send("SW_SUCCESS");
  };
  render() {
    return <div>Success</div>;
  }
}
