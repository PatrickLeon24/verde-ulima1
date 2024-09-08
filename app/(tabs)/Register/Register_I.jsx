import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, Button } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './Style_RegisterI'; // Importa los estilos desde el archivo separado

const RegisterI = () => {
  const router = useRouter();

  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [dni, setDni] = useState('');
  const [direccion, setDireccion] = useState('');
  const [correo, setCorreo] = useState('');
  const [Genero_seleccionado, setGenero_seleccionado] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    if (!nombres || !apellidos || !dni || !direccion || !correo || !Genero_seleccionado) {
      setModalVisible(true); // Mostrar el modal si hay campos vacíos
    } else {
      router.push('/Register/Register_II');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Registro de cuenta</Text>
      </View>

      {/* Subtítulo para datos personales */}
      <Text style={styles.subTitle}>Ingrese sus datos personales</Text>

      {/* Campos de texto */}
      <TextInput
        style={styles.input}
        placeholder="Ingrese sus nombres"
        value={nombres}
        onChangeText={setNombres}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese sus apellidos"
        value={apellidos}
        onChangeText={setApellidos}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese su DNI"
        keyboardType="numeric"
        value={dni}
        onChangeText={setDni}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese su dirección"
        value={direccion}
        onChangeText={setDireccion}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese su correo"
        keyboardType="email-address"
        value={correo}
        onChangeText={setCorreo}
      />

      {/* Selección de género */}
      <Text style={styles.genderText}>Seleccione su género</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            Genero_seleccionado === 'Hombre' ? styles.genderButtonSelected : null,
          ]}
          onPress={() => setGenero_seleccionado('Hombre')}
        >
          <Text style={styles.genderButtonText}>Hombre</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderButton,
            Genero_seleccionado === 'Mujer' ? styles.genderButtonSelected : null,
          ]}
          onPress={() => setGenero_seleccionado('Mujer')}
        >
          <Text style={styles.genderButtonText}>Mujer</Text>
        </TouchableOpacity>
      </View>

      {/* Botón Siguiente */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Siguiente</Text>
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
            <Text style={styles.modalText}>Por favor, complete todos los campos.</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default RegisterI;

