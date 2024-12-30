import { StyleSheet } from 'react-native';

export const globalColors = {
    primary: "#A594F9",
    secondary: "#e3d0f5",
    tertiary: "#f2f2f2",
    quaternary: "#ddd9d9",
    headerTitleColor: "#ffffff",
    cardTitle: "#1A1A19",
    tabBarBackground: "#A594F9",
    tabBarActive: "#FFFFFF",
    tabBarInactive: "#FFFFFF",
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: globalColors.primary,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
    },
    
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerText: {
        color: globalColors.headerTitleColor,
        fontSize: 20,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 28,
    },

    headerProfileText: {
        color: globalColors.headerTitleColor,
        fontSize: 16,
        marginLeft: 4,
        fontFamily: 'Montserrat',
    },

    card: {
        backgroundColor: globalColors.secondary,
        borderRadius: 24,
        padding: 16,
        marginVertical: 10,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        elevation: 2,
    },

    cardImage: {
        width: 180,
        height: 140,
        borderRadius: 12,
        marginBottom: 10,
    },

    cardTitle: {
        color: globalColors.cardTitle,
        fontSize: 18,
        fontWeight: 'bold',
    },
    
    cardSubtitle: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
        marginTop: 4,
    },

    tabBar: {
        backgroundColor: globalColors.tabBarBackground,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 70,
    },

    // estilos mascotas perdidas
    cardLost: {
        position: 'absolute',
        top: 80,
        left: 16,
        width: 343,
        height: 104,
        backgroundColor: '#f3f3f3',
        borderRadius: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        elevation: 1,
    },

    // Estilos de MascotasPerdidasScreen
    mascotasPerdidasHeader: {
        backgroundColor: globalColors.primary,
        paddingVertical: 10,
        alignItems: 'center',
    },
    mascotasPerdidasHeaderTitle: {
        color: globalColors.headerTitleColor,
        fontSize: 24,
        fontWeight: 'bold',
    },
    publishContainer: {
        backgroundColor: globalColors.tertiary,
        borderRadius: 16,
        padding: 20,
        marginHorizontal: 16,
        marginVertical: 10,
        alignItems: 'center',
    },
    publishText: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: globalColors.cardTitle,
    },
    addButton: {
        backgroundColor: globalColors.primary,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    mascotasList: {
        paddingHorizontal: 16,
    },
    mascotaCard: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 24,
        marginVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    mascotaImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20,
    },
    mascotaTextContainer: {
        flex: 1,
    },
    mascotaName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: globalColors.cardTitle,
    },
    mascotaDescription: {
        fontSize: 15,
        color: '#666',
        marginTop: 6,
    },

    // Estilos específicos para la pantalla ReportarMascotaPerdida
    reportarContainer: {
        flex: 1,
        backgroundColor: globalColors.tertiary,
    },
    reportarHeader: {
        backgroundColor: globalColors.primary,
        paddingVertical: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    reportarHeaderText: {
        color: globalColors.headerTitleColor,
        fontSize: 24,
        fontWeight: 'bold',
    },
    reportarInput: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#f0f0f0',
        margin: 10
    },
    reportarButton: {
        backgroundColor: globalColors.primary,
        borderRadius: 20,
        paddingVertical: 15,
        alignItems: 'center',
        margin:20,
    },
    reportarButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    // Estilos específicos para DetalleMascotasPerdidas
    detalleContainer: {
        flex: 1,
        backgroundColor: globalColors.tertiary,
    },
    detalleHeaderSubtitle: { // Agregado para solucionar el error
        color: globalColors.headerTitleColor,
        fontSize: 18,
    },
    detalleImage: {
        margin:20,
        width: '95%',
        height: 200,
        borderRadius: 15,
        padding:20,
        alignSelf:'center',
        
    },
    detalleInfo: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 15,
        margin:20,
    },
    detalleNombre: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    detalleDescripcion: {
        fontSize: 16,
        marginBottom: 2,
    },
    detalleContacto: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 10,
        margin:20,
    },
    detalleContactoTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detalleBoton: {
        backgroundColor: globalColors.primary,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin:20,
    },
    detalleBotonTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textinputglobal:{
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginLeft:20,
        marginRight:20,
        marginBottom: 15,
        borderRadius: 20
    },
    noDataText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        color: 'gray',
      },
});

// estilo pantalla Detalle mascota adopcion Petcard
export const petCard = StyleSheet.create({
    card: {
      borderRadius: 10,
      backgroundColor: '#fff',
      padding: 15,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    image: {
      width: '100%',
      height: 300,
      borderRadius: 10,
      marginBottom: 10,
    },
    content: {
      alignItems: 'flex-start',
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333',
    },
    description: {
      fontSize: 16,
      color: '#555',
      marginBottom: 15,
    },
    infoContainer: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    infoLabel: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
      marginRight: 5,
    },
    infoValue: {
      fontSize: 14,
      color: '#555',
    },
  });

  //foto Galeria que se encuntra en la pantalla de DetalleMascitaAdopcion.tsx
  export const photoGallery = StyleSheet.create({
    card: {
      borderRadius: 10,
      backgroundColor: '#fff',
      padding: 15,
      marginHorizontal: 10,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    photoContainer: {
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    photo: {
      width: 80,
      height: 80,
      borderRadius: 10,
      marginHorizontal: 10,
    },
  });

//boton que se encuntra en la pantalla de DetalleMascitaAdopcion.tsx, este puede reutilizarse cuantas veces quiera
  export const primaryButton = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 20, 
    },
    button: {
      backgroundColor: globalColors.primary, 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    buttonPressed: {
      opacity: 0.8,
    },
    text: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export const detalleMascotaPerdidaStyles = StyleSheet.create({
    detalleContainer: {
      padding: 20,
      backgroundColor: '#f8f8f8',
    },
    detalleImage: {
      width: '100%',
      height: 250,
      resizeMode: 'cover',
      marginBottom: 20,
    },
    detalleNombre: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    detalleDescripcion: {
      fontSize: 16,
      marginBottom: 10,
    },
    // Puedes agregar más estilos específicos si es necesario
  });

const themes = { globalColors, globalStyles, petCard, photoGallery, primaryButton };
export default themes;
