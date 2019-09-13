import axios from "axios";

export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";
export const FETCHING_SMURF_POST = "FETCHING_SMURF_POST";

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURF });
  axios
    .get("http://localhost:3333")
    .then(res => {
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURF_FAILURE, payload: res.data });
    });
};
