import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const PantallaConBarraVerde1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior verde */}
      <View style={styles.barraSuperior}>
        <Text style={styles.textoBarra}>Verd ulima</Text>
      </View>

      {/* Contenido en blanco */}
      <View style={styles.contenidoBlanco}>
        <Text style={styles.textoContenido}>Contenido en blanco</Text>
      </View>
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
    backgroundColor: 'green', // Color verde para la barra superior
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBarra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contenidoBlanco: {
    flex: 1,
    backgroundColor: 'white', // Fondo blanco para el resto de la pantalla
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoContenido: {
    fontSize: 16,
    color: 'black',
  },
});

export default PantallaConBarraVerde1;
