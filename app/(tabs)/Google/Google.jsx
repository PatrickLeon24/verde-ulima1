import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, BackHandler, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import logo from '../../../assets/images/logo.jpg';
import google from '../../../assets/images/google.jpg';
import ErrorModal from './ErrorModal';

WebBrowser.maybeCompleteAuthSession();

const GoogleLogin = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  
  // Reiniciar la autenticación cada vez que el usuario haga clic en el botón de Google
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '740624338583-rsrr0h0gklljb635423kehdq02774e3l.apps.googleusercontent.com',
  });

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      handleGoogleLogin(authentication.accessToken);
    }
  }, [response]);

  const storeUserData = async (user) => {
    try {
      const jsonUserData = JSON.stringify(user);
      await AsyncStorage.setItem('userData', jsonUserData);
    } catch (error) {
      console.error('Error al guardar los datos del usuario:', error);
    }
  };

  const handleGoogleLogin = async (token) => {
    try {
      const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await userInfoResponse.json();

      if (data.sub) {
        const nombres = data.given_name;
        const apellidos = data.family_name;

        // Hacer la solicitud al backend
        const response = await fetch('https://verdeulima.azurewebsites.net/back/iniciar_sesion', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: data.email, google: 1 }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          setModalMessage(errorData.message || 'Error en el inicio de sesión');
          setModalVisible(true);
          return;
        }

        const data1 = await response.json();
        if (data1.tipousuario) {
          storeUserData(data1);
          navigation.replace('Menu');
        } else {
          navigation.navigate('RegisterI', { email: data.email, nombres, apellidos });
        }
      } else {
        setModalMessage('Error: no se pudo obtener información del usuario.');
        setModalVisible(true);
      }
    } catch (error) {
      setModalMessage('Error de conexión. Intente nuevamente.');
      setModalVisible(true);
    }
  };

  const handleGoogleLoginPress = async () => {
    // Forzar la autenticación de Google
    if (request) {
      await promptAsync(); // Esto forzará al usuario a elegir su cuenta de Google
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verde Ulima</Text>
      <Image source={logo} style={styles.image} />
      <Text style={styles.subtitle}>Inicia sesión con Google</Text>

      <TouchableOpacity style={styles.googleButton} disabled={!request} onPress={handleGoogleLoginPress}>
        <Image source={google} style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Continuar con Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.registerText}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>

      <ErrorModal 
        modalVisible={modalVisible} 
        modalMessage={modalMessage} 
        onClose={() => setModalVisible(false)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555555',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 10,
  },
  registerText: {
    color: '#4285F4',
    fontSize: 14,
  },
});

export default GoogleLogin;