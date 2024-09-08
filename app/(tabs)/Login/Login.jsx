import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './Style_Login'; // Importa los estilos desde el archivo separado

const Login = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Verde Ulima</Text>

      {/* Imagen de reciclaje */}
      <Image
        source={require('@/assets/images/logo.jpg')} 
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar sesion</Text>
      </TouchableOpacity>

      {/* Opción de continuar con Google */}
      <Text style={styles.orText}>o continua con</Text>
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require('@/assets/images/google.jpg')}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Google</Text>
      </TouchableOpacity>

      {/* Botón de Registrarse */}
      <TouchableOpacity style={styles.registerButton} onPress={() => router.push('/Register/Register_I')}>
        <Text style={styles.registerText}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Login;

