import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
    baseURL: 'http://10.0.2.2:8000/', 
    headers: {
        'Content-Type': 'application/json',
    },
});

const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    return token ? `Bearer ${token}` : null;
};

export { api, getToken };