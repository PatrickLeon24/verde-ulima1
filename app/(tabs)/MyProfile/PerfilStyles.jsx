import { StyleSheet } from 'react-native';

const PerfilStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingVertical: 40,
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
      formContainer: {
        paddingHorizontal: 16,
        marginTop: 20,
      },
      label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
        fontWeight: '600',
      },
      input: {
        width: '90%',
        alignSelf: 'center',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 10,
        marginBottom: 25,
        backgroundColor: '#f9f9f9',
        fontSize: 16,
        color: '#333',
      },
      saveButton: {
        backgroundColor: '#000',
        paddingVertical: 18,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 30,
        width: '90%',
        alignSelf: 'center',
      },
      saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
      },
      modalText: {
        fontSize: 16,
        marginBottom: 15,
      },
});

export default PerfilStyles;