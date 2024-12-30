import React from 'react';
import { Text, Pressable, StyleSheet, View, ViewStyle, StyleProp } from 'react-native';
import { primaryButton } from '../presentation/themes/Themes';

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onPress, width = 200, height = 50 , style}) => {
  return (
    <View style={primaryButton.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
            primaryButton.button,
          { width, height },
          pressed && primaryButton.buttonPressed,
          style
        ]}
      >
        <Text style={primaryButton.text}>{text}</Text>
      </Pressable>
    </View>
  );
};



export default PrimaryButton;

