import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  // 1. add state
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            // 3. set value of TextInput to current state.text
            value={this.state.text}
            // 2. set state on each text change, we use condensed ES6 syntax here
            onChangeText={text => this.setState({ text })}
            style={{ height: 20, width: 100 }}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
