import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common'; // this will return index.js in common dir

class App extends Component {
  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;
