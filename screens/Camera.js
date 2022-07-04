import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Camera, CameraPermissionStatus } from 'react-native-vision-camera';

const Cam = (props) => {

  const [cameraPermission, setCameraPermission] = useState();
  useEffect(() => {
    Camera.getCameraPermissionStatus().then(setCameraPermission);
  }, []);

  console.log(`Re-rendering Navigator. Camera: ${cameraPermission}`);

  return (
    <View style={styles.root}>
      <Text>Hello React Native Camera 👋</Text>

    </View>
  );
}
Cam.options = {
  bottomTabs: {
    titleDisplayMode: 'alwaysHide',
    visible: false,
    drawBehind: false,
    animate: false
  },
  topBar: {
    visible: false,
    backButton: {
      visible: false
    },
    // animate: true,
    // title: {},
    // subtitle: {},
    // backButton: {},
    // background: {},
  },
  statusBar: {
    // visible: false,
    drawBehind: true,
    translucent: true,
    style: 'light',
    backgroundColor: 'transparent'
    // hideWithTopBar: true,
    // translucent: true,
    // blur: true
  },
  animations: {
    setRoot: {
      enter: {
        waitForRender: true,
        enabled: false,
        translationY: {
          from: 0,
          to: 1,
          duration: 3,
        },
      },
    },
  },
  // animations: {
  //   push: {
  //     content: {
  //       translationX: {
  //         from: require('react-native').Dimensions.get('window').width,
  //         to: 0,
  //         duration: 300
  //       }
  //     }
  //   }
  // }
  // topBar: {
  //   title: {
  //     text: 'Camerac'
  //   }
  // },
  // bottomTab: {
  //   text: 'Cameras',
  //   visible: false,
  //   drawBehind: true
  // },
  // bottomTabs: {
  //   // text: 'Camerass',
  //   visible: false,
  //   drawBehind: true
  // }
}
export default Cam

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'whitesmoke',
    backgroundColor: 'black'
  }
});
