import React from 'react';
import { connect } from 'react-redux';
import Preview from '../presentational/Preview';

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

let PreviewList = ({ posts, match }) => {
  return posts.map((post) => (
    <Preview key={post.id}
      id={post.id}
      image={post["image-url"]}
      title={post.title}
      content={`${post.content.slice(0, 50)}...`}
      date={post["date-added"]}
      author={post.author}
      match={match} />
  ));
};

PreviewList = connect(mapStateToProps)(PreviewList);

export default PreviewList;