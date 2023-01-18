import React from 'react'

const PersonCard = props => {
  const {firstName:fname, lastName:lname, age, hairColor:hairCol} = props;
  return (
    <>
    <h2>{lname}, {fname}</h2>
    <h4>Age: {age}</h4>
    <h5>Hair Color: {hairCol}</h5>
  </>
  );
}

export default PersonCard