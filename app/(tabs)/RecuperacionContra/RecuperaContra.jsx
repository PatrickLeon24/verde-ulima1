import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ErrorModal from '../Login/ErrorModal';
import { useNavigation } from '@react-navigation/native';

const RecoverPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // 1: Ingresar correo, 2: Ingresar token y nueva contraseña
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigation = useNavigation();
  
  const handleSendToken = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/back/enviar_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo: email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setModalMessage(errorData.error || 'Error al enviar el token.');
        setModalVisible(true);
        return;
      }

      setModalMessage('Token enviado al correo.');
      setModalVisible(true);
      setStep(2);

    } catch (error) {
      console.error('Error en la solicitud:', error);
      setModalMessage('Error de conexión. Intente nuevamente.');
      setModalVisible(true);
    }
  };

  const handleChangePassword = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/back/cambiar_contrasena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo: email,
          token,
          nueva_contrasena: newPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setModalMessage(errorData.error || 'Error al cambiar la contraseña.');
        setModalVisible(true);
        return;
      }

      const data = await response.json();
      setModalMessage(data.message);
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('Login');
      }, 2000); // Regresa a la pantalla de inicio de sesión

    } catch (error) {
      console.error('Error en la solicitud:', error);
      setModalMessage('Error de conexión. Intente nuevamente.');
      setModalVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.barraSuperior}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.textoBarra}>Recuperar Contraseña</Text>
        </View>

        <View style={styles.formContainer}>
          {step === 1 && (
            <>
              <Text style={styles.label}>Correo Electrónico</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingrese su correo"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <TouchableOpacity style={styles.button} onPress={handleSendToken}>
                <Text style={styles.buttonText}>Enviar Token</Text>
              </TouchableOpacity>
            </>
          )}
          {step === 2 && (
            <>
              <Text style={styles.label}>Correo Electrónico</Text>
              <TextInput
                style={[styles.input, { backgroundColor: '#e0e0e0' }]}
                value={email}
                editable={false}
              />
              <Text style={styles.label}>Token</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingrese el token recibido"
                value={token}
                onChangeText={setToken}
              />
              <Text style={styles.label}>Nueva Contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingrese su nueva contraseña"
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
                <Text style={styles.buttonText}>Cambiar Contraseña</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        <ErrorModal
          modalVisible={modalVisible}
          modalMessage={modalMessage}
          onClose={() => setModalVisible(false)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingVertical: 40,
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  botonRetroceso: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  textoBarra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  formContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 25,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RecoverPasswordScreen;
