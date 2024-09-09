import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Modal, Button } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './Style_Login'; // Importa los estilos desde el archivo separado
import users from './Usuario.json'; // Asegúrate de que la ruta es correcta

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleLogin = () => {
    // Verificar si los campos están vacíos
    if (!email || !password) {
      setModalMessage('Por favor, complete todos los campos.');
      setModalVisible(true);
      return;
    }

    // Verificar las credenciales
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
      // Si las credenciales son válidas, navega al menú
      router.push('/Menu/Menu');
    } else {
      // Mostrar una alerta si las credenciales son incorrectas
      setModalMessage('El correo o la contraseña ingresados son incorrectos.');
      setModalVisible(true);
    }
  };

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

      {/* Botón de Login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
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

      {/* Modal de error */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Login;



