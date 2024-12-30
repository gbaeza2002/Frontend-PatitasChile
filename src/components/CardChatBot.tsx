import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "../presentation/routes/AppNavigator";
import { Pressable } from "react-native-gesture-handler";
import React from "react";
import { Card } from "./Card";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalColors } from "../img/Themes";

type NavigationProp = StackNavigationProp<AppStackParamList, 'MainTabs'>;


export const CardChatBot = () => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <Pressable
            onPress={() => navigation.navigate('HomeStack', { screen: 'Chatbot' })}
            style={({ pressed }) => [
                { opacity: pressed ? 0.85 : 1 },
                styles.cardContainer,
            ]}
        >
            <View style={styles.cardContent}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Chatbot</Text>
                    <Text style={styles.subtitle}>
                        Si tienes alguna duda o consulta en general sobre mascotas puedes preguntarle a nuestro asistente virtual
                    </Text>
                </View>
                <Image 
                    source={require('../img/IA.jpg')}  
                    style={styles.image}
                />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        margin: 20,
        borderRadius: 10,
        elevation: 5, 
        backgroundColor: globalColors.secondary, 
        overflow: 'hidden', 
    },
    cardContent: {
        flexDirection: 'row',  
        alignItems: 'center',  
        padding: 15,
    },
    textContainer: {
        flex: 1,  
        paddingRight: 15, 
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',  
    },
    subtitle: {
        fontSize: 14,
        color: '#777',  
        marginTop: 5,
    },
    image: {
        width: 120,
        height: 100,
        borderRadius: 10, 
        resizeMode: 'cover',  
    },
});