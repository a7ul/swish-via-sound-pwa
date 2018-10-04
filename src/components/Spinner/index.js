import React from "react";
import classnames from "classnames";
import "./style.css";

export const Spinner = () => (
  <div className={"spinner-container"}>
    <div className={classnames("circle", "circle1")} />
    <div className={classnames("circle", "circle2")} />
    <div className={classnames("circle", "circle3")} />
    <div className={classnames("circle", "circle4")} />
  </div>
);
