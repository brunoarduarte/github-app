export const FETCH_STARTED = 'FETCH_STARTED';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_REPOS = 'FETCH_REPOS';

const fetchStarted = () => ({
  type: FETCH_STARTED });

const fetchSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

const fetchError = (payload) => ({
  type: FETCH_ERROR,
  payload,
});

const fetchUser = (payload) => ({
  type: FETCH_USER,
  payload,
});

const fetchRepos = (payload) => ({
  type: FETCH_REPOS,
  payload,
});

export const fetchUsers = (user) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(user)}`);
    const data = await response.json();
    const usersArray = data.items.slice(0, 5);
    return dispatch(fetchSuccess(usersArray));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

export const fetchUserData = (login) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(login)}`);
    const data = await response.json();
    return dispatch(fetchUser(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

export const fetchUserRepos = (login) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(login)}/repos`);
    const data = await response.json();
    return dispatch(fetchRepos(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
}

