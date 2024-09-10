import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ChangePasswordScreen = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra Superior */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => router.back()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Contraseña</Text>
      </View>

      {/* Formulario de Contraseña */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.label}>Confirmar contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su contraseña"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* Botón para guardar contraseña */}
      <TouchableOpacity style={styles.saveButton} onPress={() => alert('Contraseña guardada')}>
        <Text style={styles.saveButtonText}>Guardar contraseña</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Color de fondo blanco
  },
  barraSuperior: {
    height: 60, // Altura de la barra superior
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
    color: 'gray',
    marginBottom: 8,
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    height: 50, 
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12, 
    paddingHorizontal: 10,
    marginBottom: 25 
  },
  saveButton: {
    backgroundColor: '#000',
    paddingVertical: 18, // Aumentar el tamaño del botón
    borderRadius: 12, // Más redondeo para el botón
    alignItems: 'center',
    marginTop: 30, // Más espacio en la parte superior del botón
    width: '90%',
    alignSelf: 'center'
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChangePasswordScreen;

