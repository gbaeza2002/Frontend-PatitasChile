import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface TitleProps {
  text: string;
  style?: TextStyle;
}

export const Title: React.FC<TitleProps> = ({ text, style }) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left', 
    color: '#000', 
    marginTop: 10,
    marginLeft:10
  },
});
