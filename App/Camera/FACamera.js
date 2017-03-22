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
          captureTarget={Camera.constants.CaptureTarget.cameraRoll}
          flashMode={Camera.constants.FlashMode.auto}
          style={styles.preview}
          type={Camera.constants.Type.back}>
          <TouchableHighlight
            onPress={() => { this.takePicture() }}
            activeOpacity={0.7}
            >
          <View>
            <Text style={styles.buttonText}>Take Picture</Text>
          </View>
        </TouchableHighlight>
        </Camera>
      </View>
    );
  }
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
     fontSize: 18,
     color: '#33AAFF',
     marginBottom: 0,
     backgroundColor: '#fff'
  },
  captureButton: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
    position: 'absolute',
    top: 50
  },
});
export default FACamera;
