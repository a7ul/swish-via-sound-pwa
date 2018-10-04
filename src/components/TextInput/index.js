import React from "react";
import "./style.scss";
export class TextInput extends React.Component {
  onChange = evt => this.props.onChange(evt.target.value);
  render() {
    return (
      <input
        className="text-input"
        type="text"
        onChange={this.onChange}
        value={this.props.value}
      />
    );
  }
}
