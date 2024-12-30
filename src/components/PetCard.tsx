import React from 'react';
import { View, Text, Image } from 'react-native';
import { petCard } from '../presentation/themes/Themes';

interface PetCardProps {
  name: string;
  description: string;
  age: string;
  breed: string;
  location: string;
  contact: string;
  image: any;
}

const PetCard: React.FC<PetCardProps> = ({ name, description, age, breed, location, contact, image }) => {
  return (
    <View style={petCard.card}>
      <Image source={image} style={petCard.image} />
      <View style={petCard.content}>
        <Text style={petCard.name}>{name}</Text>
        <Text style={petCard.description}>{description}</Text>
        
        <View style={petCard.infoContainer}>
          <Text style={petCard.infoLabel}>Edad:</Text>
          <Text style={petCard.infoValue}>{age}</Text>
        </View>
        <View style={petCard.infoContainer}>
          <Text style={petCard.infoLabel}>Raza:</Text>
          <Text style={petCard.infoValue}>{breed}</Text>
        </View>
        <View style={petCard.infoContainer}>
          <Text style={petCard.infoLabel}>Ubicación:</Text>
          <Text style={petCard.infoValue}>{location}</Text>
        </View>
        <View style={petCard.infoContainer}>
          <Text style={petCard.infoLabel}>Contacto:</Text>
          <Text style={petCard.infoValue}>{contact}</Text>
        </View>
      </View>
    </View>
  );
};

export default PetCard;

