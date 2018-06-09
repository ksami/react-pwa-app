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
    const data = [{ "date-added": "2017-10-30", "content": "Autumn ipsum dolor sit amet, consectetur adipiscing rain. Nullam ac odio sodales, aliquet ante leaves, pellentesque odio. Donec auctor malesuada laoreet. Nulla vel magna at leo laoreet facilisis. In suscipit convallis accumsan. Nam maximus, magna vehicula mattis efficitur, nisi dolor eleifend lectus, sit amet aliquam tortor sem eget nisi. Vivamus ultricies lectus dolor, sagittis maximus magna iaculis vel. Vestibulum rutrum, mauris sed venenatis convallis, enim metus sodales ligula, vel maximus tellus rain vel odio. Donec ac maximus nulla. Integer egestas metus hendrerit, euismod wind nec, lobortis lectus. Suspendisse quis leo ut libero facilisis congue id leaves vrain. Duis id aliquam nibh, tempus suscipit ligula. Autumn ipsum dolor sit amet, consectetur adipiscing rain.", "tags": ["autumn", "rain", "leaves"], "author": "Lacus Diam", "image-url": "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?dpr=1&w=1280&q=80", "title": "Autumn eu dolor ac velit commodo suscipit", "id": "autumn-eu-dolor-ac-velit" }];
    this.props.updatePosts(data);
  }

  render() {
    return (
      <App centered={true}>
        <Header fixed={true} float={true} direction="row" align="center" justify="between" size="small"
          pad={{ horizontal: 'medium' }}>
          <Title>Articles</Title>
        </Header>
        <PostList />
      </App>
    );
  }
}

export default connect(null, { updatePosts })(HelloWorldApp);
