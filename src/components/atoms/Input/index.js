import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Input = ({type}) => {
  return (
    <View>
      <Text style={styles.label}>{type}</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C7D9ED',
  },
  label: {
    marginBottom: 7,
    fontSize: 16,
    color: '#7D8797',
    fontFamily: 'Assistant-Regular',
  },
});
