import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Button, SafeAreaView } from 'react-native';
import styles from './Style_RegisterI';

const RegisterRapido = ({ route, navigation }) => {
  const { email, nombres, apellidos } = route.params;  // Recibe los datos de Google
  const [dni, setDni] = useState('');
  const [direccion, setDireccion] = useState('');
  const [Genero_seleccionado, setGenero_seleccionado] = useState('');
  const [celular, setCelular] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validarDNI = (dni) => {
    const dniPattern = /^\d{8}$/;
    return dniPattern.test(dni);
  };

  const validarCelular = (celular) => {
    const celularPattern = /^\d{9}$/;
    return celularPattern.test(celular);
  };

  const validarDireccion = (direccion) => {
    // Solo permite letras, espacios, comas y puntos
    const direccionPattern = /^[A-Za-z0-9\s,\.]*$/;
    return direccionPattern.test(direccion);
  };

  const handleSubmit = () => {
    if (!nombres || !apellidos || !dni || !celular || !direccion || !Genero_seleccionado) {
      setErrorMessage('Por favor, complete todos los campos.');
      setModalVisible(true);
      return;
    }

    // Validar DNI
    if (!/^\d+$/.test(dni)) {
      setErrorMessage('El DNI debe contener solo números.');
      setModalVisible(true);
      return;
    }
    if (!validarDNI(dni)) {
      setErrorMessage('El DNI debe tener exactamente 8 dígitos.');
      setModalVisible(true);
      return;
    }

    // Validar número de celular
    if (!/^\d+$/.test(celular)) {
      setErrorMessage('El número de celular debe contener solo números.');
      setModalVisible(true);
      return;
    }
    if (!validarCelular(celular)) {
      setErrorMessage('El número de celular debe tener exactamente 9 dígitos.');
      setModalVisible(true);
      return;
    }

    if (!validarDireccion(direccion)) {
      setErrorMessage('El campo "dirección" solo puede contener letras, números y espacios.');
      setModalVisible(true);
      return;
    }

    navigation.navigate('RegisterRapido2', {
      nombre: nombres,
      apellido: apellidos,
      DNI: dni,
      numero_contacto: celular,
      direccion,
      genero: Genero_seleccionado,
      email: email,  // Pasa el correo obtenido de Google
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Registro de cuenta</Text>
      </View>

      <Text style={styles.subTitle}>Ingrese sus datos personales</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingrese su DNI"
        keyboardType="numeric"
        value={dni}
        onChangeText={setDni}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingrese su número de celular"
        keyboardType="numeric"
        value={celular}
        onChangeText={setCelular}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingrese su dirección"
        value={direccion}
        onChangeText={setDireccion}
      />

      <Text style={styles.genderText}>Seleccione su género</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[styles.genderButton, Genero_seleccionado === 'Hombre' ? styles.genderButtonSelected : null]}
          onPress={() => setGenero_seleccionado('Hombre')}
        >
          <Text style={styles.genderButtonText}>Hombre</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.genderButton, Genero_seleccionado === 'Mujer' ? styles.genderButtonSelected : null]}
          onPress={() => setGenero_seleccionado('Mujer')}
        >
          <Text style={styles.genderButtonText}>Mujer</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{errorMessage}</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default RegisterRapido;