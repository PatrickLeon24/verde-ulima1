import { StyleSheet } from 'react-native';
const Style_Menu = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white', // Color de fondo blanco
      paddingVertical: 40
    },
    barraSuperior: {
      height: 60, // Altura de la barra superior
      backgroundColor: '#34A853', // Color verde para la barra superior
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    textoBarra: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'absolute'
    },
    botonContainer: {
      flex: 1, // Toma todo el espacio disponible
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    button: {
      backgroundColor: 'white', // Color del botón
      width: 219,               // Ancho fijo del botón
      height: 79,        // Espacio horizontal interno
      borderRadius: 15,            // Hace el botón redondeado
      alignItems: 'center',        // Alinea el texto al centro
      marginVertical: 30, 
      borderWidth: 1,             // Ancho del borde
      borderColor: 'white',
      // Sombra para iOS
      shadowColor: '#000', // Color de la sombra
      shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
      shadowOpacity: 0.25, // Opacidad de la sombra
      shadowRadius: 3.84, // Radio de desenfoque de la sombra     //
      elevation: 10, 
      justifyContent: 'center',
             // Espaciado vertical
    },
    buttonText1: {
      color: '#000000',              // Color del texto
      fontSize: 12,                // Tamaño de la fuente
      fontWeight: 'bold',
      textAlign: 'center', 
      marginVertical:45,
      
      
                // Negrita para el texto
    },
    buttonText: {
      color: '#000000',              // Color del texto
      fontSize: 12,                // Tamaño de la fuente
      fontWeight: 'bold',
      textAlign: 'center', 
      position: 'absolute',
      
      
                // Negrita para el texto
    },
    
    contenidoBlanco: {
      flex: 1,
      backgroundColor: 'white', // Fondo blanco para el resto de la pantalla
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 40,              // Ancho de la imagen circular
      height: 40,             // Alto de la imagen circular
      borderRadius: 20,       // Hace la imagen circular
      marginRight:300,
      
            // Espaciado entre la imagen y el texto
    },
    image1: {
      width: 40,              // Ancho de la imagen circular
      height: 40,             // Alto de la imagen circular
      borderRadius: 20,       // Hace la imagen circular
      
            // Espaciado entre la imagen y el texto
    },
    image2: {
      width: 60,              // Ancho de la imagen circular
      height: 60,             // Alto de la imagen circular
      borderRadius: 30,
      borderWidth: 1,             // Ancho del borde
      borderColor: '#34A853',
          // Hace la imagen circular
      
      
            // Espaciado entre la imagen y el texto
    },
    textoContenido: {
      fontSize: 16,
      color: 'black',
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContent: {
      padding: 15,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center'
    },
    modalText: {
      fontSize: 16,
      marginBottom: 15
    },
    modalbotn: {
      backgroundColor: '#34A853',
      borderRadius: 15,
      padding: 10,
      paddingHorizontal: 15,
      color: 'white',
      fontSize: 14,
    }
  });

export default Style_Menu;