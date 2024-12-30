import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { photoGallery } from '../presentation/themes/Themes';

interface PhotoGalleryProps {
  photos: any[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  return (
    <View style={photoGallery.card}>
      <Text style={photoGallery.title}>More Photos</Text>
      <FlatList
        data={photos}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={photoGallery.photoContainer}
        renderItem={({ item }) => (
          <Image source={item} style={photoGallery.photo} />
        )}
      />
    </View>
  );
};



export default PhotoGallery;
