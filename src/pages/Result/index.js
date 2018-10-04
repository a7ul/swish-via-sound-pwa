import React from "react";
import paySuccessImg from "../../assets/payment-success.png";
import "./style.scss";
import { IZCircle } from "../../components/iZCircle";

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
  onClick = () => {
    this.sdk.stop();
    this.props.history.push("/home");
  };
  render() {
    return (
      <div className="pay-success-container">
        <IZCircle />
        <div className="pay-success-text">Payment successful</div>
        <img
          onClick={this.onClick}
          className="pay-success-img"
          src={paySuccessImg}
          alt="success"
        />
      </div>
    );
  }
}
