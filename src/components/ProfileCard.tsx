import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomIcon from './CustomIcon';

type CardProfileProps = {
    first_name: string;
    last_name: string;
    phone: string;
    direction: string;
    email: string;
    username: string;
}

export const ProfileCard = ({ first_name, last_name, phone, direction, email, username }: CardProfileProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.username}>{username || "Not provided"}</Text>

            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <CustomIcon name="person" style={styles.icon} />
                    <Text style={styles.value}>{first_name || "Not provided"} {last_name || "Not provided"}</Text>
                </View>

                <View style={styles.infoRow}>
                    <CustomIcon name="phone" style={styles.icon} />
                    <Text style={styles.value}>{phone || "Not provided"}</Text>
                </View>

                <View style={styles.infoRow}>
                    <CustomIcon name="house" style={styles.icon} />
                    <Text style={styles.value}>{direction || "Not provided"}</Text>
                </View>

                <View style={styles.infoRow}>
                    <CustomIcon name="email" style={styles.icon} />
                    <Text style={styles.value}>{email || "Not provided"}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        padding: 25,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        marginVertical: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
        borderColor: '#e0e0e0',
        borderWidth: 1,
    },
    username: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#3b5998',
        textAlign: 'center',
        marginBottom: 15,
    },
    infoContainer: {
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingTop: 15,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    icon: {
        fontSize: 18,
        color: '#3b5998',
        marginRight: 10,
    },
    value: {
        fontSize: 16,
        color: '#444',
    },
});

export default ProfileCard;
