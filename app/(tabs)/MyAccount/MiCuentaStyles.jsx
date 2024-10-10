import { StyleSheet } from 'react-native';

const MiCuentaStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white', // Usa backgroundColor en lugar de background
      paddingVertical: 40
    },
    barraSuperior: {
      height: 60,
      backgroundColor: '#34A853',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    botonRetroceso: {
      paddingLeft: 10,
    },
    textoBarra: {
      flex: 1,
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    lineatitulo: {
        borderBottomColor: 'green',
        borderBottomWidth: 2,
        marginBottom: 16,
        alignSelf: 'center',
        width: '100%',
    },
    userInfo: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 16,
    },
    userImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },
    userDetails: {
      alignItems: 'center',
    },
    userName: {
      fontSize: 26,
      fontWeight: '600',
      paddingBottom: 10,
    },
    userInfoText: {
      fontSize: 16,
      color: 'gray',
    },
    section: {
      marginVertical: 16,
      alignItems: 'center', // Centramos los textos dentro de cada sección
      justifyContent: 'center',
      width: '100%', // Asegurar que ocupe todo el ancho
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
      textAlign: 'center',
    },
    option: {
      width: '90%', // Ancho de las opciones para que ocupen el 90% del ancho de la pantalla
      flexDirection: 'row', // Coloca la imagen y el texto en fila
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      alignItems: 'center', // Alinea verticalmente la imagen y el texto
      justifyContent: 'center', // Centramos tanto la imagen como el texto
    },
    optionIcon: {
      width: 24, // Tamaño del ícono
      height: 24, // Tamaño del ícono
      marginRight: 12, // Espacio entre el ícono y el texto
    },
    optionText: {
      fontSize: 16,
      textAlign: 'center', // Asegura que el texto esté centrado
    },
    container2: {
      padding: 15,
      borderColor: '#bcbec2',
      borderWidth: 1,
      borderRadius: 10,
      width: '90%',
      marginBottom: 20,
    },
    menuItem2: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#bcbec2',
    },
    menuItem3: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 15,
    },
    menuText2: {
      fontSize: 16,
      marginLeft: 10,
      color: '#000',
    },
    menuText3: {
        fontSize: 16,
        marginLeft: 10,
        color: 'red',
      },

    titu2: {
      color: 'green',
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#bcbec2',
      paddingBottom: 12,
      fontWeight: '600'
    },

    flesha: {
        marginLeft: 'auto',
    }
});

export default MiCuentaStyles;