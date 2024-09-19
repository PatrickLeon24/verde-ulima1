import { StyleSheet } from 'react-native';

const estilosPedi = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingVertical: 40
    },
    button: {
      backgroundColor: 'white', // Color del botón
      width: 107,               // Ancho fijo del botón
      height: 40,               // Espacio horizontal interno
      borderRadius: 30,         // Hace el botón redondeado
      alignItems: 'center',     // Alinea el texto al centro
      marginVertical: 20,
      marginHorizontal: 10, 
      borderWidth: 1,           // Ancho del borde
      borderColor: '#34A853',
      // Sombra para iOS
      justifyContent: 'center', // Espaciado vertical
    },
    buttonText: {
      color: '#000000',         // Color del texto
      fontSize: 24,             // Tamaño de la fuente
      fontWeight: 'bold',       // Cambié 'BOLD' a 'bold'
      paddingHorizontal: 10,
    },
    barraSuperior: {
      height: 60,
      backgroundColor: '#34A853',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    barramedia: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      alignItems: 'center', // Alinea verticalmente el texto y el ícono
    },
    botonRetroceso: {
      marginRight: 30,
    },
    textoBarra: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    listaContenido: {
      paddingVertical: 10, // Añadir espacio vertical entre los elementos
    },
    contPed: {
      flexDirection: 'row',// - - - - - - PARTE DE BARRA - - - - - - 
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '80%',
      alignSelf: 'center',
      marginTop: 100,
    },
    linPed: {
      position: 'absolute',
      width: '100%',
      height: 7,
      backgroundColor: '#E1D5F7', // Color similar a la línea morada clara
      top: 13,
    },
    linPed2: {
        position: 'absolute',
        width: '100%',
        height: 7,
        backgroundColor: '#E1D5F7', // Color similar a la línea morada clara
        top: 32,
      },
    dotContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    dot: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#000', // Color negro para los puntos
    },
    dot2: {
        top: 32,
    },
    
    contEst: {// - - - - - - PARTE DE ARRIBA - - - - - - 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxEst: {
      backgroundColor: '#D9D9D9',
      paddingVertical: 30,
      paddingHorizontal: 60,
      borderRadius: 1,
    },
    textoEst: {
      color: '#000',
      fontSize: 32,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    truckIcon: {
        width: 130,
        height: 130,
        top: 90,
        right: 595,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      },
      column: {
        flex: 1,
        alignItems: 'center',
        borderColor: '#ccc',
        top: 10,
        paddingHorizontal: 180,
        paddingVertical: 20,
      },
  });


  export default estilosPedi;