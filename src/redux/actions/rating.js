import * as api from '../../api/index';
import { ADD_RATING_FAIL, ADD_RATING_SUCCESS, GET_RATING_FAIL, GET_RATING_SUCCESS } from './types';
import { setAlert } from './alert';

export const createRating = (formData) => async (dispatch) => {
  try {
    const res = await api.createReview(formData);
    if (res.data.status === 'Success') {
      dispatch({ type: ADD_RATING_SUCCESS, payload: res?.data });
      dispatch(setAlert('Your Rating was added successfully!!', 'success'));
    }
  } catch (err) {
    const error = err.response.data;
    if (error) {
      dispatch({ type: ADD_RATING_FAIL, payload: error?.message });
      dispatch(setAlert(error?.message, 'error'));
    }
  }
};

export const getMyReviews =()=> async (dispatch)=>{
  try {
    const res= await api.getMyReviews();
    if(res.data.status === 'Success'){
      dispatch({type:GET_RATING_SUCCESS, payload: res?.data})
    }
    console.log(res);
  } catch (err) {
    const error = err.response;
    if(error){
      dispatch({type: GET_RATING_FAIL, payload: error?.data?.message})
    }
  }
}