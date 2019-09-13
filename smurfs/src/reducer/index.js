import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_FAILURE,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE
} from "../actions";

const intialState = {
  smurf: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    //Getting some smurf to come out
    case FETCHING_SMURF_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurf: action.payload,
        error: ""
      };
    case FETCHING_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "action.payload"
      };
    //Playing God as I create a new smurf

    default:
      return state;
  }
};
