import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ValidarPagos = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Validar Pagos</Text>
      </View>

      {/* Aquí puedes agregar el contenido específico de ValidarPagos */}
      <View style={styles.contenido}>
        <Text style={styles.textoContenido}>Contenido de Validar Pagos aquí</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 40
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textoBarra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botonRetroceso: {
    marginRight: 20,
  },
  contenido: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoContenido: {
    fontSize: 16,
    color: 'black',
  },
});

export default ValidarPagos;
