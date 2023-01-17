import React, { Component } from 'react'

const navStyle = {
    display: "inline-block",
    backgroundColor: "blue",
    width : "180px",
    height: "400px",
    marginRight: "20px",
    marginTop: "20px",
    verticalAlign : "top"
};

// This class is an example of Inline Style
export default class Navigation extends Component {
  render() {
    return (
      <div style={ navStyle }></div>
    )
  }
}
