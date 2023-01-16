import React, { Component } from 'react'

export default class PersonCard extends Component {
  render() {
    const {firstName:fname, lastName:lname, age, hairColor:hairCol} = this.props;
    return (
      <>
        <h2>{lname}, {fname}</h2>
        <h4>Age: {age}</h4>
        <h5>Hair Color: {hairCol}</h5>
      </>
    )
  }
}
