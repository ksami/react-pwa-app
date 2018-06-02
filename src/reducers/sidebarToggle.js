import { Types } from '../actions';

const sidebarToggle = (state = true, action) => {
  switch (action.type) {
    case Types.TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
};

export default sidebarToggle;