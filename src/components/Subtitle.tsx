import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface SubtitleProps {
  text: string;
  style?: TextStyle;
}

export const Subtitle: React.FC<SubtitleProps> = ({ text, style }) => {
  return <Text style={[styles.subtitle, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    textAlign: 'left', 
    color: '#000', 
    paddingHorizontal: 20,
    marginTop: 5,
    marginBottom:8
  },
});
