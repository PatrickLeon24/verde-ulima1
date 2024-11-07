import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './stylesMisPuntos';

const HistorialItem = ({ nombre, fecha, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.historialItem}>
      <Text style={styles.historialNombre}>{nombre}</Text>
      <Text style={styles.historialFecha}>{fecha}</Text>
    </TouchableOpacity>
  );
};

export default HistorialItem;
