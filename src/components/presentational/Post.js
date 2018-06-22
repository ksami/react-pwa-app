import React from 'react';
// import { Paragraph, Card, Heading } from 'grommet';
import { Article, Section, Image, Heading, Paragraph } from 'grommet';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

let Post = ({ match, posts }) => {
  if (!posts || posts.length === 0) {
    return <Redirect to='/' />;
  }

  const post = posts.find(x => x.id === match.params.postId);

  if (!post) {
    console.error(`Post ${match.params.postId} not found`);
    return <Redirect to='/' />;
  }

  const {"image-url": image, title, content} = post;

  return (
    <Article pad='medium'>
      <Section>
        <Heading truncate={true}>{title}</Heading>
        <Image src={image} />
        <Paragraph align="start">
          {content}
        </Paragraph>
      </Section>
    </Article>

    // <Card full="horizontal" contentPad="medium" heading={post.title} label={post.date} thumbnail={post.image}>
    //   <Heading margin="none" tag="h5">by {post.author}</Heading>
    //   <Paragraph>
    //     {post.content}
    //   </Paragraph>
    // </Card>
  );
};

Post = connect(mapStateToProps)(Post);

export default Post;