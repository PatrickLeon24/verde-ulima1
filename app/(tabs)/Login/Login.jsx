import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Style_Login';
import logo from '../../../assets/images/logo.jpg';
import google from '../../../assets/images/google.jpg';
import ErrorModal from './ErrorModal';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    // Deshabilita el retroceso en la pantalla
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => backHandler.remove();
  }, []);

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
      const response = await fetch('https://verdeulima.azurewebsites.net/back/iniciar_sesion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, contrasena: password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error del servidor:', errorData);
        setModalMessage(errorData.message || 'Error en el inicio de sesión');
        setModalVisible(true);
        return;
      }
  
      const data = await response.json();
      console.log('Datos del usuario desde el servidor:', data); 
  
      // Pasar tipousuario
      if (data.tipousuario) {
        storeUserData(data);
        navigation.replace('Menu');
      } else {
        console.error('El tipo de usuario no está presente en los datos:', data);
        setModalMessage('Error: el tipo de usuario no se encontró.');
        setModalVisible(true);
      }
  
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

      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('RecuperaContra')}>
        <Text style={styles.registerText}>¿Olvidaste tu contraseña?</Text>
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
