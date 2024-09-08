import { StyleSheet } from 'react-native';

const Styles_Login = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 20, // Margen horizontal
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200, 
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  instructions: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%', // Ocupar todo el ancho disponible
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    width: '100%', // Ocupar todo el ancho disponible
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Ocupar todo el ancho disponible
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
  },
  registerButton: {
    marginTop: 20,
  },
  registerText: {
    color: '#000',
    textDecorationLine: 'underline',
  },
});

export default Styles_Login;
