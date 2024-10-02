import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PlanItem from './PlanItem';

const PantallaVerPlanes = ({ navigation }) => {
  const [planesData, setPlanesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const response = await fetch('http://192.168.18.12:8000/back/planesRecojo');
        if (!response.ok) {
          throw new Error('Error en la carga de los datos');
        }
        const data = await response.json();
        setPlanesData(data);
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
      <View style={styles.loadingContainer}>
        <Text>Cargando planes...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior verde */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Planes de Recolección</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>≡   Filtros</Text>
      </TouchableOpacity>

      {/* Lista de planes */}
      <FlatList
        data={planesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PlanItem
            nombre={item.nombre}
            descripcion={item.descripcion}
            precio={item.precio}
            imagen={item.imagen}
            onPress={() => navigation.navigate('VerPlan', { item })} // Navegar al plan específico
          />
        )}
        contentContainerStyle={styles.listaContenido}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    width: 107,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#34A853',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#34A853',
    fontSize: 12,
    fontWeight: 'semibold',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  botonRetroceso: {
    marginRight: 30,
  },
  textoBarra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listaContenido: {
    paddingVertical: 10,
  },
});

export default PantallaVerPlanes;
