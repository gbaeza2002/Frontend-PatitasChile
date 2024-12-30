import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    Alert
} from 'react-native';
import Anthropic from '@anthropic-ai/sdk';
import { globalColors, globalStyles } from '../../themes/Themes';

// Clave API de Anthropic (se recomienda usar un .env en proyectos reales)
//La clave ha sido vencida
const API_KEY = 'none';

const anthropic = new Anthropic({
    apiKey: API_KEY,
});

export default function IARecipesScreen() {
    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    // Validar entrada del usuario
    const validateInput = () => {
        if (!userInput.trim()) {
            Alert.alert('Error', 'Por favor escribe algo antes de enviar.');
            return false;
        }
        if (userInput.length < 3) {
            Alert.alert('Error', 'El texto ingresado es demasiado corto.');
            return false;
        }
        return true;
    };

    // Enviar solicitud a la API
    const handleSendRequest = async () => {
        if (!validateInput()) return;

        setLoading(true);
        setResponse('');

        try {
            const prompt = `Puedes seguir estos pasos: ${userInput}`;

            const msg = await anthropic.messages.create({
                model: 'claude-3-haiku-20240307',
                max_tokens: 1000,
                temperature: 0.7, // Ajustar la creatividad del modelo
                messages: [{ role: 'user', content: prompt }],
            });


            // Manejo dinámico del contenido basado en la estructura real
            const recipeText = msg?.content?.[0]?.text
                ?? msg?.content?.[0]?.content // Intenta acceder a 'content' si 'text' no existe
                ?? 'No se generó la respuesta. Intenta de nuevo con una solicitud más clara.';

            setResponse(recipeText);

        } catch (error) {
            console.error('Error en la solicitud:', error);
            Alert.alert('Error', 'Hubo un problema al procesar tu solicitud. Intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Asistente Virtual</Text>
            <Text style={styles.subtitle}>
                Escribe alguna duda o consulta y te ayudaremos
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ej. que hago si mi perro se pierde"
                value={userInput}
                onChangeText={setUserInput}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSendRequest}>
                <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>

            {loading && (
                <ActivityIndicator size="large" color="#000000" style={styles.loading} />
            )}

            {response ? (
                <ScrollView style={styles.responseContainer}>
                    <Text style={styles.responseTitle}>Respuesta:</Text>
                    <Text style={styles.responseText}>{response}</Text>
                    
                </ScrollView>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        color: '#666',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    sendButton: {
        backgroundColor: globalColors.primary,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    sendButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    loading: {
        marginVertical: 20,
    },
    responseContainer: {
        marginTop: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    responseTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    responseText: {
        fontSize: 16,
        color: '#555',
    },
});
