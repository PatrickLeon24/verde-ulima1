import React from 'react';
import { View, Text } from 'react-native';
import styles from './stylesMisPuntos'; // Importamos los estilos

const HistorialItem = ({ nombre, puntos }) => {
  return (
    <View style={styles.itemHistorial}>
      <Text style={styles.textoItemHistorial}>{nombre}</Text>
      <Text style={styles.puntosItemHistorial}>{puntos} puntos</Text>
    </View>
  );
};

export default HistorialItem;
