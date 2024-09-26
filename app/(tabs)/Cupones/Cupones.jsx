import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons'
import { useRouter } from 'expo-router';
import styles from './estilosCup';
import CuponItem from './CuponItem'; 
import CuponInfo from '../Cupones/Cupons.json';
const PantallaPuntos = ({navigation}) => {
  const router = useRouter();



  return (
    <SafeAreaView style={styles.container}>
      {/* - - - - - Barra superior verde - - - - - */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Cupones</Text>
      </View>
      
      {/* - - - - - Navbar - - - - - */ }
      <View>
        <Text style={styles.homero}>
            Lista de Cupones
            
        </Text>
        <View style={styles.lineatitulo}/>  
      </View>
     

      {/* - - - - - Lista de Cupones - - - - - */}
      <FlatList
        data={CuponInfo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CuponItem
            nombre={item.nombre}
            descripcion={item.descripcion}
            local={item.local}
            indic={item.indic}
            precio={item.precio}
            imagen={item.imagen}
            onPress={() =>  navigation.navigate('VerCupon', { item })} // Navegar al plan específico
          />
        )}
        contentContainerStyle = {styles.listaContenido} // Añadido para mejor estilo de contenido
      />
    </SafeAreaView>
  );
};

export default PantallaPuntos;
