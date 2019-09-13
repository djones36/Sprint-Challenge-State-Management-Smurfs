import React from "react";

const Smurf = ({ smurf }) => {
  return (
    <div>
      <h3 className="name">Name: {smurf.name}</h3>
      <p className="age">Age: {smurf.age}</p>
      <p className="height">Height: {smurf.height}</p>
    </div>
  );
};

export default Smurf;
