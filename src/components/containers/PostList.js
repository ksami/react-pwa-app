import React from 'react';
import { connect } from 'react-redux';
import Post from '../presentational/Post';
import { Box } from 'grommet';

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

let PostList = ({ posts }) => {
  return (
    <Box>
      {posts.map((post) => (
        <Post key={post.id} image={post["image-url"]} title={post.title} content={post.content}></Post>
      ))}
    </Box>
  );
};

PostList = connect(mapStateToProps)(PostList);

export default PostList;