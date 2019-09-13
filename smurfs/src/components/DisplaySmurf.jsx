import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { getSmurf } from "../actions";

const DisplaySmurf = ({ state, getSmurf }) => {
  console.log(state);
  return (
    <div className="display_smurf">
      <h2>Current Smurfs in the village</h2>
      <div>
        {state.smurf.map(smurf => {
          return <Smurf smurf={smurf} key={smurf.id} />;
        })}
      </div>
      <button onClick={() => getSmurf()}>Show me the Smurfs!</button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    state: state
  };
};
export default connect(
  mapStateToProps,
  { getSmurf }
)(DisplaySmurf);
