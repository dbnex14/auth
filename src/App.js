import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; // get access to firebase library
import { Header } from './components/common'; // this will return index.js in common dir
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // firebase initialization
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyB--hIYSUfnpzvLqSGhSm9eH5AQaYXq1nw',
        authDomain: 'auth-96f75.firebaseapp.com',
        databaseURL: 'https://auth-96f75.firebaseio.com',
        projectId: 'auth-96f75',
        storageBucket: 'auth-96f75.appspot.com',
        messagingSenderId: '313756728855'
      }
    );
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
