import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './Style_RegisterI'; // Importa los estilos desde el archivo separado

const RegisterI = () => {
const router = useRouter();
  const [Genero_seleccionado, setGenero_seleccionado] = useState("");  // Estado para seleccionar el género
  

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
    />
    <TextInput
      style={styles.input}
      placeholder="Ingrese sus apellidos"
    />
    <TextInput
      style={styles.input}
      placeholder="Ingrese su DNI"
      keyboardType="numeric"
    />
    <TextInput
      style={styles.input}
      placeholder="Ingrese su dirección"
    />
    <TextInput
      style={styles.input}
      placeholder="Ingrese su correo"
      keyboardType="email-address"
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
    <TouchableOpacity style={styles.button} onPress={()=>router.push('/Register/Register_II')}>
      <Text style={styles.buttonText}>Siguiente</Text>
    </TouchableOpacity>
  </ScrollView>
  );
};

export default RegisterI;
