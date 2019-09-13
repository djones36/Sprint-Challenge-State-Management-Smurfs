import React from "react";

const Smurf = props => {
  return (
    <div>
      <h3 className="name">Name: {props.name}</h3>
      <p className="age">Age: {props.age}</p>
      <p className="height">Height: {props.height}</p>
    </div>
  );
};

export default Smurf;
