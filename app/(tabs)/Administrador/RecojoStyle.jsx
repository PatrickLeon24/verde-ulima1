/* RecojoStyle */
import { StyleSheet } from 'react-native';

const RecojoStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Fondo gris claro para un contraste suave
    paddingVertical: 20,
  },
  header: {
    height: 60,
    backgroundColor: '#34A853', // Color verde para la barra superior
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  botonRetroceso: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff', // Blanco para que contraste
    width: '90%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 6,
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 3,
  },
  emptyMessage: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo transparente oscuro
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});

export default RecojoStyle;