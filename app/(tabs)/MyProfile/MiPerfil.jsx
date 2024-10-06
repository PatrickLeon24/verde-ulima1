import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, Modal, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const EditProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [numeroContacto, setNumeroContacto] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const jsonUserData = await AsyncStorage.getItem('userData');
        if (jsonUserData !== null) {
          const data = JSON.parse(jsonUserData);
          setUserData(data);
          setNombre(data.nombres);
          setApellido(data.apellidos);
          setDni(data.DNI);
          setCorreo(data.email);
          setDireccion(data.direccion);
          setNumeroContacto(data.numero_contacto);
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

  const handleSubmit = async () => {
    if (!nombre || !apellido || !dni || !correo || !direccion || !numeroContacto) {
      setModalMessage('Por favor, complete todos los campos.');
      setModalVisible(true);
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/back/guardar_perfil', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: userData.id,
          email: userData.email,
          nombres: nombre,
          apellidos: apellido,
          DNI: dni,
          direccion: direccion,
          numero_contacto: numeroContacto,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setModalMessage(errorData.error || 'Error al guardar los cambios.');
        setModalVisible(true);
        return;
      }

      const data = await response.json();
      setModalMessage(data.mensaje || 'Los cambios han sido guardados.');
      setModalVisible(true);

      // Actualizar AsyncStorage después de los cambios
      const updatedUserData = { ...userData, nombres: nombre, apellidos: apellido, DNI: dni, direccion: direccion, numero_contacto: numeroContacto };
      await AsyncStorage.setItem('userData', JSON.stringify(updatedUserData));

      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('Menu');
      }, 2000);
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setModalMessage('Error de conexión. Intente nuevamente.');
      setModalVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Editar Perfil</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Ingrese sus nombres</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Nombres"
          placeholderTextColor="#bbb"
        />
        <Text style={styles.label}>Ingrese sus apellidos</Text>
        <TextInput
          style={styles.input}
          value={apellido}
          onChangeText={setApellido}
          placeholder="Apellidos"
          placeholderTextColor="#bbb"
        />
        <Text style={styles.label}>Ingrese su DNI</Text>
        <TextInput
          style={styles.input}
          value={dni}
          onChangeText={setDni}
          placeholder="DNI"
          placeholderTextColor="#bbb"
        />
        <Text style={styles.label}>Ingrese su correo</Text>
        <TextInput
          style={styles.input}
          value={correo}
          onChangeText={setCorreo}
          placeholder="Correo electrónico"
          placeholderTextColor="#bbb"
        />
        <Text style={styles.label}>Ingrese su dirección</Text>
        <TextInput
          style={styles.input}
          value={direccion}
          onChangeText={setDireccion}
          placeholder="Dirección"
          placeholderTextColor="#bbb"
        />
        <Text style={styles.label}>Ingrese su número de teléfono</Text>
        <TextInput
          style={styles.input}
          value={numeroContacto}
          onChangeText={setNumeroContacto}
          placeholder="Número de teléfono"
          placeholderTextColor="#bbb"
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
        <Text style={styles.saveButtonText}>Guardar cambios</Text>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default EditProfileScreen;