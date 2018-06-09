import React from 'react';
import { Article, Section, Image, Heading, Paragraph } from 'grommet';

const Post = ({ image, title, content }) => (
  <Article scrollStep={true} pad='medium'>
    <Section>
      <Heading truncate={true}>{title}</Heading>
      <Image src={image} />
      <Paragraph align="start">
        {content}
    </Paragraph>
    </Section>
  </Article>
);

export default Post;