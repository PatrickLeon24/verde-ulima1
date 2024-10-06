import { StyleSheet } from 'react-native';


const estilosPDetaCup = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 40,
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  botonRetroceso: {
    marginRight: 30,
  },
  textoBarra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 240,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginHorizontal: 16,
    marginTop: -30,
  },
  planTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  lineatitulo: {
    borderBottomColor: '#34A853',
    borderBottomWidth: 2,
    marginBottom: 16,
    alignSelf: 'center',
    width: '50%',
  },
  planPrecio: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34A853',
    textAlign: 'center',
    marginBottom: 16,
  },
  planDescriptionTitu: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#777',
    marginBottom: 10,
  },
  planDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
    lineHeight: 22,
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#34A853',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentSI: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalContentNO: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  ImagenModal: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  modalbotonSI: {
    color: '#34A853',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  modalbotonNO: {
    color: '#e74c3c',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
});


  export default estilosPDetaCup;