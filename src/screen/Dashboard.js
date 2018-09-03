import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, Button, StyleSheet } from 'react-native';

class Dashboard extends Component {
  goTo = screen => {
    this.props.navigation.navigate(screen);
  };

  render() {
    return (
      <View style={styles.root}>
        <Text>Dashboard Page</Text>
        <Button onPress={() => this.goTo('Site')} title="To Site" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default withNavigation(Dashboard);
