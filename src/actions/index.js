export const Types = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
  UPDATE_POSTS: 'UPDATE_POSTS'
};

export const toggleSidebar = () => ({ type: Types.TOGGLE_SIDEBAR });

export const updatePosts = (posts) => {
  return {type: Types.UPDATE_POSTS, posts};
};