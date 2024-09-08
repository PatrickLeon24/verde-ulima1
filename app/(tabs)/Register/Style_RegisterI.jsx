import { StyleSheet } from 'react-native';

const Style_RegisterI = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    height: 60, 
    backgroundColor: '#34A853',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30 
  },
  headerText: {
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16, 
    marginBottom: 25,
    color: '#333',
    textAlign: 'center'
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    height: 50, 
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12, 
    paddingHorizontal: 10,
    marginBottom: 25 
  },
  genderText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333'
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20, 
  },
  genderButton: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 30, 
    borderRadius: 12, // Aumentar el redondeo
    marginHorizontal: 12 // Aumentar el espacio entre los botones
  },
  genderButtonSelected: {
    backgroundColor: '#34A853',
  },
  genderButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 18, // Aumentar el tamaño del botón
    borderRadius: 12, // Más redondeo para el botón
    alignItems: 'center',
    marginTop: 30, // Más espacio en la parte superior del botón
    width: '90%',
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, // Aumentar el tamaño del texto del botón
    fontWeight: 'bold'
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center'
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15
  },
  modalButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default Style_RegisterI;
