import React from "react";
import { Spinner } from "../../components/Spinner";
import readerImg from "../../assets/izettle-reader.png";
import { CircleWave } from "../../components/CircleWave";
import { checkIfValidPurchases } from "../../utils/util";

import "./style.css";

const { Chirp, toAscii } = window.ChirpConnectSDK;
const CHIRP_KEY = "5442954CfaAE356FCA8Df2E2F";

export class Home extends React.Component {
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
          const isValid = checkIfValidPurchases(text);
          if (isValid) {
            this.sdk.stop();
            this.props.history.push({
              pathname: "/payment",
              state: { purchases: JSON.parse(text) }
            });
          }
        }
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <img src={readerImg} alt="reader" className="reader-image" />
        <CircleWave />
        <Spinner />
        <p className="saving">
          Listening for your purchases
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </p>
      </div>
    );
  }
}
