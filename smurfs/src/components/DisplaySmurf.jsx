import React from "react";
import SmurfForm from "./SmurfForm";
import Smurf from "./Smurf";

const DisplaySmurf = () => {
  return (
    <div className="display_smurf">
      <h2>Current Smurfs in the village</h2>
      <SmurfForm />
      <Smurf />
    </div>
  );
};

export default DisplaySmurf;
