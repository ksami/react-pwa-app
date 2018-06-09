import React from 'react';
// import { Article, Section, Image, Heading, Paragraph } from 'grommet';
import { Paragraph, Card, Heading } from 'grommet';

const Post = ({ author, date, image, title, content }) => (
  // <Article scrollStep={true} pad='medium'>
  //   <Section>
  //     <Heading truncate={true}>{title}</Heading>
  //     <Image src={image} />
  //     <Paragraph align="start">
  //       {content}
  //     </Paragraph>
  //   </Section>
  // </Article>
  <Card full="horizontal" contentPad="medium" heading={title} label={date} thumbnail={image}>
    <Heading margin="none" tag="h5">by {author}</Heading>
    <Paragraph>
      {content}
    </Paragraph>
  </Card>
);

export default Post;