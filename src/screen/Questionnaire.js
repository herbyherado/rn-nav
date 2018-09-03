import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Questionnaire extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>Questionnaire Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})

export default Questionnaire;