import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Modal,Button} from 'react-native';
import styles from './Style_RegisterII'; // Importa los estilos desde el archivo separado

const RegisterII = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [ConfirContra, setConfirContra] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = () => {
    if (!correo || !contrasena || !ConfirContra) {
      setModalMessage('Por favor, complete todos los campos.');
      setModalVisible(true); 
    } else if (contrasena != ConfirContra) {
      setModalMessage('Las contraseñas no coinciden.'); 
      setModalVisible(true);
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    {/* Título */}
    <View style={styles.header}>
      <Text style={styles.headerText}>Registro de cuenta</Text>
    </View>

    {/* Subtítulo para datos personales */}
    <Text style={styles.subTitle}>Ingrese sus credenciales</Text>

    {/* Campos de texto */}
    <TextInput
      style={styles.input}
      placeholder="Ingrese su correo"
      value = {correo}
      onChangeText={setCorreo}
    />
    <TextInput
      style={styles.input}
      placeholder="Ingrese su contraseña"
      value = {contrasena}
      onChangeText={setContrasena}
      secureTextEntry
    />
    <TextInput
      style={styles.input}
      placeholder="Confirmar contraseña"
      value= {ConfirContra}
      onChangeText={setConfirContra}
      secureTextEntry
    />

    {/* Botón Siguiente */}
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>Registrar</Text>
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
  </SafeAreaView>
  );
};

export default RegisterII;