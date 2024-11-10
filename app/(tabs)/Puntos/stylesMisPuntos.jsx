import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 40,
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
  puntosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  textoDisponibles: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  puntos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numeroPuntos: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  historialScroll: {
    flex: 1,
    marginVertical: 20,
  },
  historialContainer: {
    paddingHorizontal: 20,
  },
  historialTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  linea: {
    height: 1,
    backgroundColor: '#000',
    marginBottom: 10,
  },
  itemHistorial: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textoItemHistorial: {
    fontSize: 16,
  },
  puntosItemHistorial: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  inputCodigo: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    fontSize: 16,
    paddingVertical: 10,
    marginBottom: 20,
  },
  botonEnviar: {
    backgroundColor: '#34A853',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: 'center',
    width: 150,
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  historialItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  historialNombre: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  historialFecha: {
    fontSize: 14,
    color: '#555',
  },

  //Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  qrImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  modalCloseButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  modalCloseText: {
    color: 'white',
    fontWeight: 'bold',
  },

  //HistorialItem
  historialItemContainer: {
    marginVertical: 8,
  },
  historialItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  cuponName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fechaCanje: {
    fontSize: 14,
    color: '#888',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
