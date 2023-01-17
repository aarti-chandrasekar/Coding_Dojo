import React, { Component } from 'react'
import styles from "./SubContent.module.css"


// This class in an example of Styles using CSS Modules
export default class SubContent extends Component {
  render() {
    return (
      <div className={ styles.subContent }></div>
    )
  }
}
