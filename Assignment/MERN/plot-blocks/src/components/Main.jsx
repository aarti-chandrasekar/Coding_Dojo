import React, { Component } from 'react'
import styles from "./Main.module.css"

// This class in an example of Styles using CSS Modules
export default class Main extends Component {
  render() {
    return (
      <div className={ (this.props.styleSel === 0)? styles.main :styles.sub }>
        {this.props.children}
      </div>
    )
  }
}
