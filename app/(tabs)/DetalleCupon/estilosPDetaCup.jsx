import { StyleSheet } from 'react-native';


const estilosPDetaCup = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingVertical: 40
    },
    image: {
      width: '100%',
      height: 237,
      marginBottom: 16,
      resizeMode: 'contain',
      marginTop: 5,
      
      
    },
    detailsContainer: {
      padding: 16,
    },
    planTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    planDetails: {
      fontSize: 16,
      marginBottom: 8,
    },
    planDuration: {
      fontSize: 16,
      marginBottom: 8,
    },
    planDescription: {
      fontSize: 16,
      marginBottom: 16,
    },
    planDescriptiontitu: {
        fontSize: 24,
        marginBottom: 5,
        fontWeight: 'bold',
        color: 'gray',
      },
    planPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    button: {
      backgroundColor: '#00cc99',
      paddingVertical: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 16,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    barraSuperior: {
      height: 60,
      backgroundColor: '#34A853',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
  
    },
    botonRetroceso: {
      marginRight: 30,
    },
    textoBarra: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });


  export default estilosPDetaCup;