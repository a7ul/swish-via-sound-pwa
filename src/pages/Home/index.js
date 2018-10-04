import React from "react";
import readerImg from "../../assets/izettle-reader.png";
import { CircleWave } from "../../components/CircleWave";
import { checkIfValidPurchases } from "../../utils/util";
import micImage from "../../assets/mic.png";
import { Arrow } from "../../components/Arrow";
import "./style.css";
import { IZCircle } from "../../components/iZCircle";

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
          console.log("received", text);
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
    const receiving = this.state.chirpState === "Receiving";
    return (
      <div className="home-container">
        <IZCircle />
        <div className="reader-flowing">
          <div className="reader-image-container">
            <img src={readerImg} alt="reader" className="reader-image" />
          </div>
          <CircleWave />
        </div>
        <Arrow />
        <span className="mic-container">
          <img src={micImage} className="mic-image" alt="mic" />
          <p className="listen-text">
            {receiving ? "Receiving items" : "Listening for your purchases"}
          </p>
        </span>
      </div>
    );
  }
}
