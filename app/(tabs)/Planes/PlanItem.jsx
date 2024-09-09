import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlanItem = ({ nombre, descripcion }) => {
  return (
    <View style={styles.planContainer}>
      <Text style={styles.planNombre}>{nombre}</Text>
      <Text style={styles.planDescripcion}>{descripcion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  planContainer: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  planNombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  planDescripcion: {
    fontSize: 14,
    color: '#555',
  },
});

export default PlanItem;
