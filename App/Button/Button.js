import React, { Component } from 'react';
import {
  TouchableHighlight,
  NavigationExperimental,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class ButtonComp extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => { this.props.onPress() }}
        underlayColor="transparent"
        activeOpacity={0.7}
        >
      <View>
        <Text style={styles.buttonText}>Continue As Guest</Text>
      </View>
    </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 12,
    color: '#33AAFF',
    marginBottom: 0
  }
})

module.exports = { ButtonComp };
