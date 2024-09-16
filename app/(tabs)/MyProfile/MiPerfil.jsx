import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const EditProfileScreen = ({navigation}) => {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [dni, setDni] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Color de fondo blanco
    paddingVertical: 40
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

export default EditProfileScreen;
