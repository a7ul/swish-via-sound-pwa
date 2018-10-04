import React from "react";
import "./style.css";

export const CircleWave = props => {
  return (
    <div className="circle-wave-container">
      <div className="circle-wave one" />
      <div className="circle-wave two" />
      <div className="circle-wave three" />
      {props.children}
    </div>
  );
};
