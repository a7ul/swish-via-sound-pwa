import React from "react";
import { Table } from "../../components/Table";
import "./style.scss";
import { filterProducts } from "../../utils/util";
import swishBtnImg from "../../assets/swish_button.png";

const data = [
  { id: 1, name: "APPLE", price: 25 },
  { id: 2, name: "MELON", price: 15 },
  { id: 3, name: "DURIAN", price: 30 },
  { id: 4, name: "MANGO", price: 25 },
  { id: 5, name: "DRAGON FRUIT", price: 15 },
  { id: 6, name: "GRAPE", price: 30 },
  { id: 7, name: "FIG", price: 15 },
  { id: 8, name: "KUMQUAT", price: 10 },
  { id: 9, name: "KIWIFRUIT", price: 15 },
  { id: 10, name: "PRUNE", price: 30 },
  { id: 11, name: "SATSUMA", price: 10 },
  { id: 12, name: "PINEAPPLE", price: 10 },
  { id: 13, name: "STRAWBERRY", price: 10 },
  { id: 14, name: "LEMON", price: 30 },
  { id: 15, name: "POMEGRANATE", price: 25 },
  { id: 16, name: "POMELO", price: 25 }
];

const columns = [
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Price",
    accessor: "price"
  }
];
const onSwishClick = () => {
  const back_scheme = "https://swish.atulr.com/#/result";
  const token = "123123123123123123312";
  const payLink = `swish://paymentrequest?token=${token}&callbackurl=${back_scheme}`;
  window.location.replace(`${payLink}`);
};

export const Payment = props => {
  const state = props.location.state || {};
  const items = state.purchases || [];
  const filtered = filterProducts(data, items);
  return (
    <div className="payment-container">
      <Table data={filtered} columns={columns} />
      <div className="payment-button-container">
        <div
          onClick={onSwishClick}
          className="pay-btn"
          style={{ backgroundImage: `url(${swishBtnImg})` }}
        />
      </div>
    </div>
  );
};
