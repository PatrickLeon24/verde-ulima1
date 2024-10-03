import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Modal, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './Style_RegisterII';
import { useRoute } from '@react-navigation/native';

const RegisterII = ({ navigation }) => {
  const route = useRoute();
  
  // Recibimos los datos de la primera pantalla RegisterI
  const { nombre, apellido, DNI, direccion, genero, numero_contacto } = route.params;

  const [tipoUsuario, setTipoUsuario] = useState('');
  const [tiposUsuario, setTiposUsuario] = useState([]);
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [ConfirContra, setConfirContra] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Función para obtener los tipos de usuario del backend
  useEffect(() => {
    const fetchTiposUsuario = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/back/tipos-usuario'); // URL para obtener los tipos de usuario
        const data = await response.json();
        setTiposUsuario(data);
      } catch (error) {
        console.error('Error al obtener los tipos de usuario:', error);
        setModalMessage('Error al cargar los tipos de usuario.');
        setModalVisible(true);
        setLoading(false);
      }
    };

    fetchTiposUsuario();
  }, []);

  // Función para manejar el registro del usuario
  const handleSubmit = async () => {
    if (!correo || !contrasena || !ConfirContra || !tipoUsuario) {
      setModalMessage('Por favor, complete todos los campos.');
      setModalVisible(true);
    } else if (contrasena !== ConfirContra) {
      setModalMessage('Las contraseñas no coinciden.');
      setModalVisible(true);
    } else {
      // Enviar los datos al backend
      try {
        const response = await fetch('http://127.0.0.1:8000/back/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre,
            apellido,
            DNI,
            direccion,
            genero,
            numero_contacto,
            email: correo,
            contrasena,
            tipo_usuario: tipoUsuario, // Enviar el tipo de usuario seleccionado
          }),
        });

        const data = await response.json();
        if (response.ok) {
          // Registro exitoso, navega al login
          navigation.navigate('Login');
        } else {
          setModalMessage(data.message || 'Error al registrar el usuario.');
          setModalVisible(true);
        }
      } catch (error) {
        setModalMessage('Error de conexión.');
        setModalVisible(true);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Título */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Registro de cuenta</Text>
      </View>

      {/* Subtítulo para ingresar el correo y la contraseña */}
      <Text style={styles.subTitle}>Ingrese su correo y contraseña</Text>

      {/* Campo para correo */}
      <TextInput
        style={styles.input}
        placeholder="Ingrese su correo electrónico"
        value={correo}
        onChangeText={setCorreo}
      />
      
      {/* Campo para contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Ingrese su contraseña"
        secureTextEntry={true}
        value={contrasena}
        onChangeText={setContrasena}
      />
      
      {/* Campo para confirmar contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Confirme su contraseña"
        secureTextEntry={true}
        value={ConfirContra}
        onChangeText={setConfirContra}
      />

      <Text style={styles.subTitle}>Por favor, escoja su tipo de usuario</Text>

      <Picker
          selectedValue={tipoUsuario}
          onValueChange={(itemValue) => setTipoUsuario(itemValue)}
          style={styles.picker}
      >
      <Picker.Item label="Seleccione el tipo de usuario"/>
        {tiposUsuario.map((tipo) => (
          <Picker.Item key={tipo.id} label={tipo.tipo} value={tipo.id} />
        ))}
      </Picker>

      {/* Botón para completar el registro */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      {/* Modal para mensajes de error */}
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

export default RegisterII;
