import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Style_Login';
import logo from '../../../assets/images/logo.jpg';
import google from '../../../assets/images/google.jpg';
import ErrorModal from './ErrorModal';
import { validateCredentials } from './Validacion';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const storeUserData = async (user) => {
    try {
      const jsonUserData = JSON.stringify(user);
      await AsyncStorage.setItem('userData', jsonUserData);
    } catch (error) {
      console.error('Error al guardar los datos del usuario:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.18.12:8000/back/iniciar_sesion', {
        method: 'POST', // Asegúrate de que sea POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, contrasena: password }), // Aquí envías los datos
      });

      if (!response.ok) {
        const errorData = await response.json();
        setModalMessage(errorData.message || 'Error en el inicio de sesión');
        setModalVisible(true);
        return;
      }

      const data = await response.json();
      
      // Si las credenciales son correctas, guarda los datos del usuario y navega al menú
      storeUserData(data);
      navigation.navigate('Menu');

    } catch (error) {
      console.error('Error en la solicitud:', error);
      setModalMessage('Error de conexión. Intente nuevamente.');
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verde Ulima</Text>
      <Image source={logo} style={styles.image} />
      <Text style={styles.subtitle}>Entra con tu cuenta registrada</Text>
      <Text style={styles.instructions}>Ingrese su correo de usuario y la contraseña</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo de usuario"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>o continua con</Text>
      <TouchableOpacity style={styles.googleButton}>
        <Image source={google} style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register_I')}>
        <Text style={styles.registerText}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>

      <ErrorModal 
        modalVisible={modalVisible} 
        modalMessage={modalMessage} 
        onClose={() => setModalVisible(false)} 
      />
    </View>
  );
};

export default Login;




