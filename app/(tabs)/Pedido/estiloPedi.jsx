import { StyleSheet } from 'react-native';

const estilosPedi = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingVertical: 40,
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
      justifyContent: 'center',
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
    dotContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    dot: {
        marginTop: 32,
        marginRight: 15,
        width: 28,
        height: 28,
        borderRadius: 14,
        marginLeft: 15,
      backgroundColor: '#000', // Color negro para los puntos
    },
    dotlast: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#000', // Color negro para los puntos
        left: 35,
      },
    contEst: {// - - - - - - PARTE DE ARRIBA - - - - - - 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxEst: {
      backgroundColor: '#D9D9D9', //color
      paddingVertical: 20,
      marginHorizontal: 10,
      paddingHorizontal: 18,
      borderRadius: 1,
    },
    textoEst: {
      color: '#000',
      fontSize: 32,
      //fontWeight: 'bold',
    },
    
    truckIcon: {
        width: 90,
        height: 90,
        position: 'absolute',
        top: -80,
        left: 30,
    },  
      labelx: {
        fontSize: 11,
        //textAlign: 'center',
        paddingTop: 10,
        
      },
      labellast: {
        fontSize: 11,
        left: 20,
        paddingTop: 10,
        justifyContent: 'flex-end'
      },
      contenidoja: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
      },
      labelja: {
        fontWeight: 'bold',
        color: '#444',
      },
      valueja: {
        fontWeight: 'normal',
        color: '#666',
      },

      //- - - 
      container2: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 20,
      },
      packageInfo: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
      },
      label: {
        fontWeight: 'bold',
        color: '#444',
      },
      value: {
        fontWeight: 'normal',
        color: '#666',
      },
      stepRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
      },
      stepContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
      },
      stepTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#444',
      },
      stepDescription: {
        marginTop: 5,
        fontSize: 14,
        color: '#666',
      },
      stepTime: {
        marginTop: 5,
        fontSize: 12,
        color: '#999',
      },
      stepRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
      },
      circleAndLine: {
        alignItems: 'center',
      },
      circle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#6a1b9a', // Color morado del círculo
        marginTop: 8, // Para alinear con el texto
      },
      line: {
        width: 12, // Ancho del conector
        height: 12, // Altura de la línea debajo del círculo
        backgroundColor: 'black',
        marginTop: 14, // Espacio entre el círculo y la línea
        marginBottom: 10,
      },
      stepContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
      },
      stepTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#444',
      },
      stepDescription: {
        marginTop: 5,
        fontSize: 14,
        color: '#666',
      },
      stepTime: {
        marginTop: 5,
        fontSize: 12,
        color: '#999',
      },
      cuadra: {
        backgroundColor: '#d0d3d9',
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 10,
        borderRadius: 15,
        marginBottom: 20,
        marginHorizontal: 30,
      },
      cuadratexto: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        color: '#34A853',
        fontWeight: '500',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
      },
      cuadratextodeltexto: {
        fontSize: 18,
        color: 'black',
        fontWeight: '100',
        marginLeft: 'auto',
      }
  });


  export default estilosPedi;