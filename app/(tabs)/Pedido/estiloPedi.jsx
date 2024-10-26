import { StyleSheet } from 'react-native';

const shadowStyle = {
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 5,
};

const textCenter = {
  textAlign: 'center',
};

const containerBackground = {
  backgroundColor: '#f9f9f9',
};
const estilosPedi = StyleSheet.create({
  container: {
    flex: 1,
    ...containerBackground,
    paddingVertical: 40,
  },
  button: {
    backgroundColor: 'white',
    width: 107,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#34A853',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
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
    alignItems: 'center',
  },
  botonRetroceso: {
    marginRight: 30,
  },
  textoBarra: {
    color: 'white',
    fontSize: 18,
  },
  listaContenido: {
    paddingVertical: 10,
  },
  contPed: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginTop: 100,
  },
  linPed: {
    position: 'absolute',
    width: '100%',
    height: 7,
    backgroundColor: '#E1D5F7',
    top: 13,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dot: {
    marginTop: 32,
    marginRight: 15,
    width: 28,
    height: 28,
    borderRadius: 14,
    marginLeft: 15,
    backgroundColor: '#000',
  },
  dotlast: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#000',
    left: 35,
  },
  contEst: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxEst: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 20,
    marginHorizontal: 10,
    paddingHorizontal: 18,
  },
  textoEst: {
    color: '#000',
    fontSize: 32,
  },
  truckIcon: {
    width: 90,
    height: 90,
    position: 'absolute',
    top: -80,
    left: 30,
  },
  labelx: {
    fontSize: 11,
    paddingTop: 10,
  },
  labellast: {
    fontSize: 11,
    left: 20,
    paddingTop: 10,
    justifyContent: 'flex-end',
  },
  contenidoja: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    ...shadowStyle,
  },
  labelja: {
    fontWeight: 'bold',
    color: '#444',
  },
  valueja: {
    color: '#666',
  },
  container2: {
    flex: 1,
    padding: 20,
    ...containerBackground,
  },
  packageInfo: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    ...shadowStyle,
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
  },
  value: {
    color: '#666',
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  circleAndLine: {
    alignItems: 'center',
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#6a1b9a',
    marginTop: 8,
  },
  line: {
    width: 12,
    height: 12,
    backgroundColor: 'black',
    marginTop: 14,
    marginBottom: 10,
  },
  stepContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    ...shadowStyle,
  },
  stepTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#444',
  },
  stepDescription: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
  stepTime: {
    fontSize: 12,
    color: '#999',
  },
  cuadra: {
    backgroundColor: '#d0d3d9',
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 15,
    marginBottom: 20,
    marginHorizontal: 30,
  },
  cuadratexto: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    color: '#34A853',
    fontWeight: '500',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
    height: '90%',
    alignSelf: 'center',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    ...shadowStyle,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    ...textCenter,
  },
});
  export default estilosPedi;