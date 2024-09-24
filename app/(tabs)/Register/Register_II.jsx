import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './Style_RegisterII'; // Importa los estilos desde el archivo separado

const RegisterII = () => {
  
  return (
    <SafeAreaView style={styles.container}>
    {/* Título */}
    <View style={styles.header}>
      <Text style={styles.headerText}>Registro de cuenta</Text>
    </View>

    {/* Subtítulo para datos personales */}
    <Text style={styles.subTitle}>Por favor cree su contraseña</Text>

    {/* Campos de texto */}
    <TextInput
      style={styles.input}
      placeholder="Ingrese su contraseña"
      secureTextEntry
    />
    <TextInput
      style={styles.input}
      placeholder="Confirmar contraseña"
      secureTextEntry
    />

    {/* Botón Siguiente */}
    <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText}>Registrar</Text>
    </TouchableOpacity>

  </SafeAreaView>
  );
};

export default RegisterII;