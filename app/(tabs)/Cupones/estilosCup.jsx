import { StyleSheet } from 'react-native';

const estilosCup = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
      Palasexo: {
        color: '#000000',         // Color del texto
        fontSize: 24,             // Tamaño de la fuente
        fontWeight: 'bold',       // Cambié 'BOLD' a 'bold'
        paddingHorizontal: 10,
        paddingTop: 15,
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
      navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 168, 83, 0.10)', // Verde claro
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        paddingVertical: 10,
      },
      iconoxd: {
        alignItems: 'center',
      },
      iconLabel: {
        fontSize: 12,
        marginTop: 4,
        color: 'black',
      },
      planContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      },
      iconContainer: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textContainer: {
        flex: 1,
        marginLeft: 15,
      },
      planNombre: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      planDescripcion: {
        fontSize: 14,
        color: '#999',
      },
      infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      planTime: {
        fontSize: 12,
        color: '#999',
        marginLeft: 5,
      },    
        listaContenido: {
            paddingVertical: 10, // Añadir espacio vertical entre los elementos
    },
});

export default estilosCup;