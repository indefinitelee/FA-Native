import React, { Component } from 'react';
import {
  Button,
  NavigationExperimental,
  StyleSheet,
  Text,
  View
} from 'react-native';


class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Page',
  };
  render() {
    return (
      <View>
        <Text>Second Page</Text>
      </View>
    );
  }
}
