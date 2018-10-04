import ReactTable from "react-table";
import React from "react";
import "react-table/react-table.css";
import "./style.scss";

export const Table = props => {
  return <ReactTable data={props.data} columns={props.columns} />;
};
