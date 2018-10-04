import React from "react";
import { Spinner } from "../../components/Spinner";
import readerImg from "../../assets/izettle-reader.png";
import { CircleWave } from "../../components/CircleWave";

import "./style.css";

export const Home = () => {
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
};
