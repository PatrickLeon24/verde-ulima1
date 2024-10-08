import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './estilosCup';
import CuponItem from './CuponItem'; 
//import CuponInfo from '../Cupones/Cupons.json';


const PantallaPuntos = ({navigation}) => {
  const [cuponesData, setCuponesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const response = await fetch('http://192.168.18.12:8000/back/cupones');
        if (!response.ok) {
          throw new Error('Error en la carga de los datos');
        }
        const data = await response.json();
        setCuponesData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanes();
  }, []);

  if (loading) {
    return (
      <View /*style={styles.loadingContainer}*/>
        <Text>Cargando planes...</Text>
      </View>
    );
  }


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
        data={cuponesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CuponItem
            local={item.local}
            descripcion={item.descripcion}
            costo_puntos={item.costo_puntos}
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