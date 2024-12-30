import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

type CustomInputProps = TextInputProps & {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry, ...props }: CustomInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry} // Aceptar y pasar esta propiedad
      placeholderTextColor="#94a3b8"
      {...props} // Pasar cualquier otra propiedad adicional
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 46,
    padding: 0,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    backgroundColor: '#ffffff',
    color: '#94a3b8',
    fontSize: 14,
    fontFamily: 'Open Sans',
    lineHeight: 46,
    marginBottom: 15,
  },
});

export default CustomInput;
