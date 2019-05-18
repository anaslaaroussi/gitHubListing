import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../redux/actions";

const initialState = {
  fetching: false,
  repos: [],
  error: null,
  page: 1
};

export function http_reducer(state = initialState, action) {
  switch (action.type) {
    // call request
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    // call success
    case API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        repos: state.repos.concat(action.payload),
        page: state.page + 1
      };

    // call failure
    case API_CALL_FAILURE:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
}
