import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import PlanItem from './PlanItem';

const PantallaPlan = ({ navigation }) => {
  const router = useRouter();
  const [planesData, setPlanesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handlePressPlan = (id) => {
    // Navegar a la pantalla de detalles del plan
    router.push(`/Planes/DetallePlan/${id}`);
  };

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/back/planesRecojo');
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

  // Limitar la cantidad de planes que se muestran
  const MAX_PLANES_TO_SHOW = 4;
  const limitedPlanesData = planesData.slice(0, MAX_PLANES_TO_SHOW);

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
        <Text style={styles.textoBarra}>Mi plan</Text>
      </View>
      
      {/* Información del plan actual */}
      <PlanItem
        nombre={"SI"}
        descripcion={"SI"}
        onPress={() => navigation.navigate('')} // Navegar al plan específico
      />
      
      <View style={styles.barramedia}>
        <Text style={styles.buttonText}>¿Quieres cambiar de plan?</Text>
      </View>
      
      {/* Lista de planes */}
      <FlatList
        data={limitedPlanesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PlanItem
            nombre={item.nombre}
            descripcion={item.descripcion}
            precio={item.precio}
            imagen={item.imagen}
            aserrin={item.aserrin}
            baldes={item.baldes}
            duracion={item.duracion}
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
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  barramedia: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
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

export default PantallaPlan;