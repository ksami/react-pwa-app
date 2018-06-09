import React from 'react';
import { connect } from 'react-redux';
import Post from '../presentational/Post';

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

let PostList = ({ posts }) => {
  return posts.map((post) => (
    <Post key={post.id}
      image={post["image-url"]}
      title={post.title}
      content={post.content}
      date={post["date-added"]}
      author={post.author} />
  ));
};

PostList = connect(mapStateToProps)(PostList);

export default PostList;