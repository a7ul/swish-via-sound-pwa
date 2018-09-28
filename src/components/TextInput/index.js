import React from "react";

export class TextInput extends React.Component {
  onChange = evt => this.props.onChange(evt.target.value);
  render() {
    return (
      <input type="text" onChange={this.onChange} value={this.props.value} />
    );
  }
}
