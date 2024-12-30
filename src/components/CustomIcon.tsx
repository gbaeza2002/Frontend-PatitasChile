import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet } from 'react-native';

type IconProps = {
    name: string; 
    color?: string; 
    size?: number; 
};

const CustomIcon: React.FC<IconProps> = ({ name, color = 'gray', size = 24 }) => {
    return (
        <View style={styles.iconContainer}>
            <Icon name={name} color={color} size={size} />
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
});

export default CustomIcon;
