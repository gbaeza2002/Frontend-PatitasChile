import React, { useRef, useState, useEffect } from "react";
import {
    Image,
    ImageSourcePropType,
    NativeScrollEvent,
    NativeSyntheticEvent,
    useWindowDimensions,
    View,
    StyleSheet
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";
import { Title } from "../../../components/Title";
import { Subtitle } from "../../../components/Subtitle";
import PrimaryButton from "../../../components/PrimaryButton";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { SesionRootStackParam } from "../../routes/SesionStackNavigator";

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}

const items: Slide[] = [
    {
        title: 'Encuentra a tu mascota ideal',
        desc: 'Descubre y adopta animales en busca de un hogar.',
        img: require('../../../img/sesion/adopt.png'),
    },
    {
        title: 'Conéctate con rescatistas',
        desc: 'Recibe ayuda para encontrar mascotas perdidas y conecta con rescatistas.',
        img: require('../../../img/sesion/donation.png'),
    },
    {
        title: 'Apoya una buena causa',
        desc: 'Dona y ayuda a organizaciones de rescate animal.',
        img: require('../../../img/sesion/pets.png'),
    },
];

export const BienvenidaSlideScreen = () => {
    
    const sesionsScreen = useNavigation<NavigationProp<SesionRootStackParam>>();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    // Verificar si el usuario ya está autenticado
    useEffect(() => {
        const checkAuthToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                // Si hay un token, redirige a la pantalla principal
                sesionsScreen.navigate('home'); 
            }
        };
        
        checkAuthToken();
    }, []);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
        setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
    };

    const scrollToSlide = (index: number) => {
        if (!flatListRef.current) return;
        flatListRef.current.scrollToIndex({
            index: index,
            animated: true,
        });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <FlatList
                ref={flatListRef}
                data={items}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <SlideItems item={item} />}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
            />

            {/* Indicador de puntos */}
            <View style={styles.dotContainer}>
                {items.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentSlideIndex === index && styles.activeDot
                        ]}
                    />
                ))}
            </View>

            {/* Botón de navegación */}
            <PrimaryButton
                style={styles.button}
                text={currentSlideIndex === items.length - 1 ? 'Finalizar' : 'Siguiente'}
                onPress={() => {
                    if (currentSlideIndex === items.length - 1) {
                        sesionsScreen.navigate('Registrar');
                    } else {
                        scrollToSlide(currentSlideIndex + 1);
                    }
                }}
            />
        </View>
    );
};

interface SlideItemProps {
    item: Slide;
}

const SlideItems = ({ item }: SlideItemProps) => {
    const { width } = useWindowDimensions();
    const { img, title, desc } = item;

    return (
        <View style={{
            flex: 1,
            borderRadius: 5,
            padding: 40,
            justifyContent: 'center',
            width: width
        }}>
            <Image
                source={img}
                style={{
                    width: width * 0.7,
                    height: width * 0.7,
                    resizeMode: 'center',
                    alignSelf: 'center',
                }}
            />
            <Title text={title} style={styles.title}/>
            <Subtitle text={desc} style={styles.subtitle} />
        </View>
    );
};


const styles = StyleSheet.create({
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 120,
        width: '100%',
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#333',
    },
    button: {
        marginBottom: 30,
        alignSelf: 'center',
        width: 120,
    },
    title: {
        color: '#030303',
        fontSize: 30,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 40,
        textAlign: 'center',
        marginBottom: 20
    },
    subtitle: {
        color: '#030303',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '600',
        lineHeight: 25,
        textAlign: 'center',
        
    },
});
