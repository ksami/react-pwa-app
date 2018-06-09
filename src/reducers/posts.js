import { Types } from '../actions';

const posts = (state = [], action) => {
  switch (action.type) {
    case Types.UPDATE_POSTS:
      return [...action.posts];
    default:
      return state;
  }
}

export default posts;