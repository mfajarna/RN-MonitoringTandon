import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E75B74',
    borderRadius: 10,
    paddingVertical: 13,
    width: 157,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '800',
    fontFamily: 'Assistant-Bold',
  },
});
