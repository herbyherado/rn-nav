import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, StyleSheet, Button } from 'react-native';

class Site extends Component {
  goTo = screen => {
    this.props.navigation.navigate(screen);
  };

  render() {
    return (
      <View style={styles.root}>
        <Text>Site Page</Text>
        <Button onPress={() => this.goTo('Questionnaire')} title="To Questionnaire" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default withNavigation(Site);
