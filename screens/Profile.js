import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {navOption} from '../lib/ctx';

const Profile = props => {
  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>

      <Button
        title="Profile"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Camera',
              options: Platform.OS !== 'ios' && navOption,
            },
          })
        }
      />
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
