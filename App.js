import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon active name='home'>Home</Icon>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
