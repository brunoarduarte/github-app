import { FETCH_STARTED, FETCH_SUCCESS, FETCH_ERROR, FETCH_USER, FETCH_REPOS } from '../actions';

const initialState = {
  loading: false,
  data: null,
  user: [],
  repos: [],
  error: null,
}

export function reducer (state = initialState, action) {
  switch (action.type) {
  case FETCH_STARTED:
    return { ...state, loading: true };
  case FETCH_SUCCESS:
    return { ...state, data: action.payload, loading: false };
  case FETCH_ERROR:
    return { ...state, data: null, loading: false, error: action.payload };
  case FETCH_USER:
    return { ...state, user: action.payload, loading: false, error: null };
  case FETCH_REPOS:
    return { ...state, repos: action.payload, loading: false, error: null };
  default:
    return state;
  }
}

export default reducer;
