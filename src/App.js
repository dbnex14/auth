import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; // get access to firebase library
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="small" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
