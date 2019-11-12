import React, { Component } from "react";
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill"; // ES6
class MoMsEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return <ReactQuill value={this.state.text} onChange={this.handleChange} />;
  }
}

export default MoMsEditor;
