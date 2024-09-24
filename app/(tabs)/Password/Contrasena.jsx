import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChangePasswordScreen = ({ route, navigation }) => {
  const { password } = route.params; // Accede correctamente a los parámetros
  const [contrasena, setContrasena] = useState(password);
  const [confirmContrasena, setConfirmContrasena] = useState(password);

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
      <TouchableOpacity style={styles.saveButton} onPress={() => alert('Contraseña guardada')}>
        <Text style={styles.saveButtonText}>Guardar Contraseña</Text>
      </TouchableOpacity>
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
});

export default ChangePasswordScreen;


