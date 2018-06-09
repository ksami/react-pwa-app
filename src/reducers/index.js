import { combineReducers } from 'redux';
import sidebarToggle from './sidebarToggle';
import posts from './posts';

export default combineReducers({
  sidebarToggle,
  posts
});