import React from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';
import { globalStyles } from '../presentation/themes/Themes';

type CardProps = {
  imageSource: ImageSourcePropType;
  title: string;
  subtitle: string;
};

export const Card: React.FC<CardProps> = ({ imageSource, title, subtitle }) => {
  return (
    <View style={globalStyles.card}>
      <Image source={imageSource} style={globalStyles.cardImage} />
      <Text style={globalStyles.cardTitle}>{title}</Text>
      <Text style={globalStyles.cardSubtitle}>{subtitle}</Text>
    </View>
  );
};

