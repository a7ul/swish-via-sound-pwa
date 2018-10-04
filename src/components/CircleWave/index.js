import React from "react";
import "./style.css";

export const CircleWave = props => {
  return (
    <div className="circle-wave-container">
      {props.children}

      <div className="circle-wave" />
    </div>
  );
};
