import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import user from './user';
import getUsers from './getUsers';
import tours from './tours';
import bookings from './booking';
import rating from './rating'

export default combineReducers({
  auth,
  alert,
  user,
  getUsers,
  tours,
  bookings,
  rating,
});
