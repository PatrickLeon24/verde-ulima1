import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Verde Ulima</Text>

      {/* Imagen de reciclaje */}
      <Image
        source={require('@/assets/images/logo.jpg')} // Cambia la ruta a la imagen que estés utilizando
        style={styles.image}
      />

      {/* Texto de introducción */}
      <Text style={styles.subtitle}>Entra con tu cuenta registrada</Text>
      <Text style={styles.instructions}>Ingrese su correo de usuario y la contraseña</Text>

      {/* Campos de correo y contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Correo de usuario"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />

      {/* Botón de Login */}
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Opción de continuar con Google */}
      <Text style={styles.orText}>or continue with</Text>
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={ require ('@/assets/images/google.jpg') }
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Google</Text>
      </TouchableOpacity>

      {/* Botón de Registrarse */}
      <TouchableOpacity style={styles.registerButton} onPress={()=>router.push('/Register/Register_I')}>
        <Text style={styles.registerText}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructions: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
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
    width: '100%',
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
    width: '100%',
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

export default LoginScreen;

