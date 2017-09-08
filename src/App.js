import React, { Component } from 'react';
import GrommetApp from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <GrommetApp centered={false}>
        <Header colorIndex="brand">
          <img src={logo} className="App-logo" alt="logo" />
          <Heading tag='h2'>Welcome to React + Grommet</Heading>
        </Header>
        <Box pad="medium">
          <Paragraph>
            To get started, edit <code>src/App.js</code> and save to reload.
          </Paragraph>
        </Box>
      </GrommetApp>
    );
  }
}

export default App;
