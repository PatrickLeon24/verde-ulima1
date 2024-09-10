import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useColorScheme } from 'react-native'; // Si usas un hook para los temas
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ChangePasswordScreen = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? darkThemeColors : lightThemeColors;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
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
  label: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
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

export default ChangePasswordScreen;

