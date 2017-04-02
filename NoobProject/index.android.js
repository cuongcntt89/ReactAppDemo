import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import { Container, Content, Button, Text } from 'native-base';
import LoginComponent from './src/components/login';

export default class NoobProject extends Component {
  render() {
    return (
      <LoginComponent />
    );
  }
}

/*class ComponentTemp extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button block>
            <Text>{this.props.name}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}*/

AppRegistry.registerComponent('NoobProject', () => NoobProject);