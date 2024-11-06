// HistorialItem.jsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from './stylesMisPuntos';

const HistorialItem = ({ nombre, fecha }) => {
  return (
    <View style={styles.historialItem}>
      <Text style={styles.historialNombre}>{nombre}</Text>
      <Text style={styles.historialFecha}>{fecha}</Text>
    </View>
  );
};

export default HistorialItem;