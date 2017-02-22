import React from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Login from './Login/Login.js'
import SecondScene from './SecondScene/SecondScene.js'
import FACamera from './Camera/FACamera.js'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Welcome to Forever Amour</Text>;
        <Button
          onPress={ () => navigate('Second')}
          title='Second Page'
        />
      </View>
    );
  }
}

const fanative = StackNavigator ({
  Home: { screen: HomeScreen },
  Second: { screen: SecondScreen},
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
