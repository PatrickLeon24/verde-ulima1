
import { StyleSheet } from 'react-native';

const Style_RegisterII = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 40,
  },
  header: {
    height: 60,
    backgroundColor: '#34A853',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'semibold',
    position: 'absolute',
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
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
  modalButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',  // Cambia a 100% para llenar el contenedor
  },
  radioSelected: {
    borderColor: '#4CAF50',
  },
  radioLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
  },
});

export default Style_RegisterII;
