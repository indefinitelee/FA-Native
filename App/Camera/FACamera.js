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
import RNFB from 'react-native-fetch-blob';
import RNFS from 'react-native-fs';
import _ from 'lodash';
import apiKey from './api-key';
import Camera from 'react-native-camera';

const base64 = require('base-64');

 class FACamera extends Component {

  takePicture() {
   this.camera.capture()
    .then((data) => console.log(data))
    .catch(err => console.error(err));
  }






  // getImageResult(location) {
  //   const view = this;
  //   console.log('Getting photo from location ${location}');
  //
  //   RNFB.fetch('GET', location, {'Ocp-Apim-Subscription-Key': apiKey})
  //   .then((res) => {
  //     const response = res.json();
  //
  //     //check if processing is done
  //     if (response.status === 'Succeeded') {
  //       const processedResult = JSON.parese(response.processingResult)
  //     }
  //   })
  // }

  parseVideoResult(fragments) {
      const emotions = {
          neutral: [],
          happiness: [],
          surprise: [],
          sadness: [],
          anger: [],
          disgust: [],
          fear: [],
          contempt: []
      };
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
