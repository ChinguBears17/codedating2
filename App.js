import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

export default class App extends React.Component {
  componentDidMount() {
      // Initialize Firebase
      var config = {
          apiKey: "secret",
          authDomain: "codedating-ec7fa.firebaseapp.com",
          databaseURL: "https://codedating-ec7fa.firebaseio.com",
          projectId: "codedating-ec7fa",
          storageBucket: "codedating-ec7fa.appspot.com",
          messagingSenderId: "178465429148"
      };
      firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Blah blah</Text>
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
