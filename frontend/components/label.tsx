import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LabelProps } from '../libs/types/labelProps';
const Label = ({ label }: LabelProps) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    marginBottom: '10px',

    fontFamily: 'noto-reg',
    marginLeft: 10,
  },
  label: {
    fontSize: 10,
    color: '#3d4447',
  },
});
export default Label;
