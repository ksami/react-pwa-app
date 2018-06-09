import React, { Component } from 'react';
import 'grommet/grommet.min.css';

import { App, Header, Title } from 'grommet';
import { updatePosts } from './actions';
import { PostList } from './components';
import { connect } from 'react-redux';


class HelloWorldApp extends Component {
  loadAllPosts(posts) {
    this.props.updatePosts(posts);
  }

  componentDidMount() {
    fetch("https://jsonbin.io/b/59f721644ef213575c9f6531")
      .then(response => response.json())
      .then(data => this.loadAllPosts(data));
  }

  render() {
    return (
      <App centered={true}>
        <Header fixed={true} direction="row" align="center" justify="between" size="small" pad={{ horizontal: 'medium' }}>
          <Title>Articles</Title>
        </Header>
        <PostList />
      </App>
    );
  }
}

export default connect(null, { updatePosts })(HelloWorldApp);
