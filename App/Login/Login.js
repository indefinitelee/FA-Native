import React, { Component } from 'react';
import { ButtonComp } from '../Button/Button.js';
import {
  NavigationExperimental,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const Login = ({ onPress }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.header}>Forever Amour</Text>
      <TextInput
        style={styles.input}
        placeholder='Name'
      />
      <TextInput
        style={styles.input}
        placeholder='password'
      />

      <ButtonComp onPress={()=> { onPress() }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    flex: 1
  },
  container: {
    height: 600,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  input: {
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rebeccapurple',
    borderWidth: 1
  },
  header: {
    backgroundColor: 'transparent',
    fontSize: 16,
    position: 'relative',
    marginTop: 20,
  }
})

module.exports = Login;
