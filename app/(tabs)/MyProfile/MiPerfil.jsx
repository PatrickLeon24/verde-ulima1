import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useColorScheme } from 'react-native'; // Si usas un hook para los temas
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const EditProfileScreen = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? darkThemeColors : lightThemeColors;

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [dni, setDni] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Barra Superior */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => router.back()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Mi Perfil</Text>
      </View>

      {/* Formulario de Edición de Perfil */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese sus nombres"
          value={nombre}
          onChangeText={setNombre}
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
          value={dni}
          onChangeText={setDni}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese su correo"
          value={correo}
          onChangeText={setCorreo}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese su dirección"
          value={direccion}
          onChangeText={setDireccion}
        />
      </View>

      {/* Botón para guardar cambios */}
      <TouchableOpacity style={styles.saveButton} onPress={() => alert('Cambios guardados')}>
        <Text style={styles.saveButtonText}>Guardar cambios</Text>
      </TouchableOpacity>
    </View>
  );
};

const lightThemeColors = {
  background: '#fff',
  primary: '#4CAF50', // Color verde del header
};

const darkThemeColors = {
  background: '#000',
  primary: '#333',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  botonRetroceso: {
    marginRight: 10,
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
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 15,
    marginHorizontal: 16,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
