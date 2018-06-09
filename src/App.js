import React, { Component } from 'react';
import 'grommet/grommet.min.css';

import { App, Box, Header, Footer, Meter, Title, Value } from 'grommet';

class HelloWorldApp extends Component {
  render() {
    return (
      <App centered={false}>
        <Header direction="row" justify="between" size="large"
          pad={{ horizontal: 'medium' }}>
          <Title>Grommet standalone</Title>
        </Header>
        <Box pad='medium'>
          <Meter value={40} />
        </Box>
        <Footer primary={true} appCentered={true} direction="column"
          align="center" pad="small" colorIndex="grey-1">
          <p>
            Build your ideas with <a href="http://grommet.io" target="_blank">Grommet</a>!
          </p>
        </Footer>
      </App>
    );
  }
}

export default HelloWorldApp;
