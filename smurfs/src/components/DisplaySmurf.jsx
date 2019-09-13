import React from "react";
import Form from "./Form";
import Smurf from "./Smurf";

const DisplaySmurf = () => {
  return (
    <div className="display_smurf">
      <h2>Current Smurfs in the village</h2>
      <Form />
      <Smurf />
    </div>
  );
};

export default DisplaySmurf;
