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
  canjearContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  canjearTexto: {
    fontSize: 18,
    fontWeight: 'bold',
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
});

export default styles;
