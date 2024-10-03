import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PlanItem = ({ nombre, imagen, precio, descripcion, onPress }) => {

  const router = useRouter();
  return (
    <TouchableOpacity onPress={onPress} style={styles.planContainer}>
      {/*{<View style={styles.iconContainer}>*/} 
      {/* <Ionicons name="image-outline" size={40} color="#999" />*/} 
      {/*{</View>*/} 
      <Image
            source={{uri: imagen}}
            style= {styles.iconContainer}
        />
      <View style={styles.textContainer}>
        <Text style={styles.planNombre}>{nombre}</Text>
        <Text style={styles.planprecio}>S/. {precio}</Text>
        <Text style={styles.planDescripcion} numberOfLines={2}>{descripcion}</Text>
      </View>
      <View style={styles.infoContainer}>
        {/*<Ionicons name="add-circle-outline" size={20} color="#999" />*/}
        <Text style={styles.planTime}>Mas información</Text>
      </View>
      {/*<Ionicons name="chevron-forward" size={20} color="#000" />*/}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  planContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  planprecio: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  //iconContainer: {
  //  width: 100,
  //  height: 100,
  //  borderRadius: 10,
  //  backgroundColor: '#e0e0e0',
  //  justifyContent: 'center',
  //  alignItems: 'center',
  //},
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    //backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  planNombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  planDescripcion: {
    fontSize: 14,
    color: '#999',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  //planTime: {
  //  fontSize: 12,
  //  color: '#999',
  //  marginLeft: 5,
  //},
  planTime: {
    fontSize: 12,
    //color: '#999',
    marginLeft: 5,
    backgroundColor: 'blue',
    color: 'white',
    paddingVertical: 8, 
    paddingHorizontal: 10,
    marginTop: 60,
    borderRadius: 20,
    fontWeight: 'bold',
  },  
});

export default PlanItem;