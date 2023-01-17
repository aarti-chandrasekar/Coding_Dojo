import React, { Component } from 'react'

export default class PersonCard extends Component {
  constructor(props){
    super(props);
    this.state = {age : props.age};
  }
  
  render() {
    const {firstName:fname, lastName:lname, hairColor:hairCol} = this.props;
    const age = this.state.age;
    return (
      <>
        <h2>{lname}, {fname}</h2>
        <h4>Age: {age}</h4>
        <h5>Hair Color: {hairCol}</h5>
        <button onClick={() => {this.setState({age : age + 1});}}>Birthday Button for {fname} {lname}</button>
      </>
    )
  }
}
