import React, { useEffect } from "react";
import { connect } from "react-redux";
import SmurfForm from "./SmurfForm";
import Smurf from "./Smurf";
import { getSmurf } from "../actions";

const DisplaySmurf = ({ getSmurf, state }) => {
  console.log(state);
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);
  if (state.isLoading) {
    return <h3>loading</h3>;
  }
  return (
    <div className="display_smurf">
      <h2>Current Smurfs in the village</h2>
      <Smurf />
      <SmurfForm />
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
