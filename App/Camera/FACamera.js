'use strict'
import React, { Component } from 'react';
import { ButtonComp } from '../Button/Button.js';
import {
  AppRegistry,
  Button,
  Dimensions,
  NavigationExperimental,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import Camera from 'react-native-camera';

 class FACamera extends Component {

  takePicture() {
   this.camera.capture()
    .then((data) => console.log(data))
    .catch(err => console.error(err));
    }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          aspect={Camera.constants.Aspect.fill}
          captureAudio={false}
          captureMode={Camera.constants.CaptureMode.still}
          captureTarget={Camera.constants.CaptureTarget.disk}
          flashMode={Camera.constants.FlashMode.auto}
          style={styles.preview}
          type={Camera.constants.Type.back}>
          <Button title="Take Picture" style={styles.captureButton} onPress={this.takePicture.bind(this)}/>
        </Camera>

        {/* <ButtonComp onPress={()=> { goBack }}/> */}

        {/* <Button
          title='go back'
          onPress={goBack}
          style={styles.button}
        /> */}
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
   buttonText: {
   color: "#000"
  },
  captureButton: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
});

export default FACamera;
