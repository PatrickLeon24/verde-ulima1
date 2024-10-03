import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, Modal, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const ChangePasswordScreen = ({navigation}) => {
  const [userData, setUserData] = useState(null);
  const [contrasena, setContrasena] = useState('');
  const [confirmContrasena, setConfirmContrasena] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  useEffect(() => {
    const getUserData = async () => {
      try {
        const jsonUserData = await AsyncStorage.getItem('userData');
        if (jsonUserData !== null) {
          const data = JSON.parse(jsonUserData);
          setUserData(data);
          setContrasena(data.contrasena);
          setConfirmContrasena(data.contrasena);
        }
      } catch (error) {
        console.error('Error al recuperar los datos del usuario:', error);
      }
    };

    getUserData();
  }, []);
  
  if (!userData) {
    return <Text>Cargando...</Text>; 
  }

  const handleSubmit = () => {
    if (!contrasena || !confirmContrasena) {
      setModalMessage('Por favor, complete todos los campos.');
      setModalVisible(true); // Mostrar el modal si hay campos vacíos
    } else {
      // Mostrar mensaje de guardado y luego redirigir al menú
      setModalMessage('Los cambios han sido guardados');
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('Menu'); // Redirigir al menú después de 2 segundos
      }, 2000);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Barra Superior */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Contraseña</Text>
      </View>

      {/* Formulario de Contraseña */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nueva Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su contraseña"
          secureTextEntry
          value={contrasena}
          onChangeText={setContrasena}
        />
        <Text style={styles.label}>Confirmar Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme su contraseña"
          secureTextEntry
          value={confirmContrasena}
          onChangeText={setConfirmContrasena}
        />
      </View>

      {/* Botón para guardar contraseña */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
        <Text style={styles.saveButtonText}>Guardar Contraseña</Text>
      </TouchableOpacity>

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Color de fondo más suave
    paddingVertical: 40,
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853', // Color verde para la barra superior
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  botonRetroceso: {
    paddingLeft: 10,
  },
  textoBarra: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '600', // Negrita para mejorar la visibilidad
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
    backgroundColor: '#f9f9f9', // Fondo claro para los campos
    fontSize: 16,
    color: '#333', // Color de texto oscuro
  },
  saveButton: {
    backgroundColor: '#000',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center'
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15
  },
  modalButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default ChangePasswordScreen;

