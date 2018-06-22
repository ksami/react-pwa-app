import React from 'react';
import { Paragraph, Card, Heading } from 'grommet';
import { Link } from 'react-router-dom';

const Preview = ({ author, date, image, title, content, match, id }) => (
  <Card full="horizontal" contentPad="medium" heading={title} label={date} thumbnail={image}>
    <Heading margin="none" tag="h5">by {author}</Heading>
    <Paragraph>
      {content}
    </Paragraph>
    <Link to={`${match.url}/${id}`}>Read more -></Link>
  </Card>
);

export default Preview;