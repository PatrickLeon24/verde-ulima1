import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import UserSession from '../Singleton/Singleton';

const EditProfileScreen = ({navigation }) => {
  const userSession = UserSession.getInstance();
  const { nombres, apellidos, DNI, email, direccion } = userSession.getUser(); 

  // Inicializa los estados con los valores recibidos
  const [nombre, setNombre] = useState(nombres);
  const [apellido, setApellidos] = useState(apellidos);
  const [dni, setDni] = useState(DNI);
  const [correo, setCorreo] = useState(email);
  const [direccio, setDireccion] = useState(direccion);

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra Superior */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Mi Perfil</Text>
      </View>

      {/* Formulario de Edición de Perfil */}
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
          onChangeText={setApellidos}
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
          value={direccio}
          onChangeText={setDireccion}
          placeholder="Dirección"
          placeholderTextColor="#bbb"
        />
      </View>

      {/* Botón para guardar cambios */}
      <TouchableOpacity 
        style={styles.saveButton} 
        onPress={() => alert('Cambios guardados')}>
        <Text style={styles.saveButtonText}>Guardar cambios</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
});

export default EditProfileScreen;
