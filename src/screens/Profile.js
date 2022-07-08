import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20%',
  },
  text: {fontSize: 20, color: '#fff'},
});
export default Profile;
