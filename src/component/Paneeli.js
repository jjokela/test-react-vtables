import React from "react";
import PropTypes from "prop-types";

export default class Paneeli extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
  };

  render() {
    return (
      <div className="">
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}