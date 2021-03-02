import {
  ADD_RATING_SUCCESS,
  ADD_RATING_FAIL,
  GET_RATING_SUCCESS,
  GET_RATING_FAIL,
} from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_RATING_SUCCESS:
      return { ...state, newRating: action?.payload };
    case ADD_RATING_FAIL:
      return { ...state };
    case GET_RATING_SUCCESS:
      return { ...state, myReviews: action?.payload };
    case GET_RATING_FAIL:
      return { ...state, getRatingError: action?.payload };
    default:
      return state;
  }
};
