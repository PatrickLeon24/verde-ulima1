import { StyleSheet } from 'react-native';

const RecojoStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Color de fondo blanco
    paddingVertical: 40,
  },
  card: {
    width: '90%', // Ancho de la tarjeta al 90% del contenedor
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignSelf: 'center', // Centra la tarjeta horizontalmente
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', 
    marginTop: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContainer: {
    width: '80%', 
    backgroundColor: 'white', 
    borderRadius: 10,
    padding: 20,
    elevation: 5, 
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  header: {
    height: 60, // Altura de la barra superior
    backgroundColor: '#34A853', // Color verde para la barra superior
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botonRetroceso: {
    marginRight: 20,
  },
});

export default RecojoStyle;
