import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './routes';

export default class App extends React.Component {
  render() {
    return <AppStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
