import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface PaymentOptionButtonProps {
  iconName: string;
  text: string;
  iconColor?: string;
  iconSize?: number;
  onPress: () => void;
}

export const PaymentOptionButton: React.FC<PaymentOptionButtonProps> = ({
  iconName,
  text,
  iconColor = '#7e22ce',
  iconSize = 32,
  onPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.7 : 1 }, 
      ]}
      onPress={onPress}
    >
      <Icon name={iconName} size={iconSize} color={iconColor} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
    marginVertical: 10,
    marginTop: 20, 
    width: 320,
    height: 60,
  },
  text: {
    fontSize: 18,
    marginLeft: 12,
    color: '#000',
  },
});

