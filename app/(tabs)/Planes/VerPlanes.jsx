import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlanItem from './PlanItem';

const PantallaVerPlanes = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [planesData, setPlanesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [precioMin, setPrecioMin] = useState('');
  const [precioMax, setPrecioMax] = useState('');
  const [frecuenciaRecojo, setFrecuenciaRecojo] = useState('');
  const [recojoActivo, setRecojoActivo] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const jsonUserData = await AsyncStorage.getItem('userData');
        if (jsonUserData !== null) {
          setUserData(JSON.parse(jsonUserData));
        }
      } catch (error) {
        console.error('Error al recuperar los datos del usuario:', error);
      }
    };

    getUserData(); 
  }, []); 

  useEffect(() => {
    const verificarRecojoActivo = async () => {
      if (userData) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/back/verificar_recojo_activo/${userData.usuario_id}/`, {
            method: 'POST',
          });
          const data = await response.json();
          setRecojoActivo(data.recojo_activo);
        } catch (error) {
          console.error('Error al verificar recojo activo del usuario:', error);
        }
      }
    };

    verificarRecojoActivo();
  }, [userData]);

  const fetchPlanes = async (filters = {}) => {
    setLoading(true);
    try {
      let url = 'http://127.0.0.1:8000/back/planesRecojo';
      const { precio_min, precio_max, frecuencia_recojo } = filters;

      // Agregar los filtros a la URL si están presentes
      const queryParams = [];
      if (precio_min) queryParams.push(`precio_min=${precio_min}`);
      if (precio_max) queryParams.push(`precio_max=${precio_max}`);
      if (frecuencia_recojo) queryParams.push(`frecuencia_recojo=${frecuencia_recojo}`);
      if (queryParams.length > 0) {
        url += `?${queryParams.join('&')}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error en la carga de los datos');
      }
      const data = await response.json();
      setPlanesData(data);
    } catch (error) {
      console.error('Error al recuperar planes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userData) { 
      fetchPlanes();
    } else {
      setLoading(false); 
    }
  }, [userData]);

  const handleApplyFilters = () => {
    const filters = {
      precio_min: precioMin,
      precio_max: precioMax,
      frecuencia_recojo: frecuenciaRecojo,
    };
    fetchPlanes(filters);
    setModalVisible(false); // Cerrar el modal después de aplicar los filtros
  };

  if (!userData || loading) {
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

      {/* Botón para abrir el modal de filtros */}
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>≡   Filtros</Text>
      </TouchableOpacity>

      {/* Lista de planes */}
      <FlatList
        data={planesData}
        keyExtractor={(item) => item.plan_id.toString()}
        renderItem={({ item }) => (
          <PlanItem
            nombre={item.nombre}
            imagen={item.imagen}
            precio={item.precio}
            descripcion={item.descripcion}
            onPress={() => navigation.navigate('VerPlan', { 
              item, usuario_id: userData.usuario_id, activo : recojoActivo ,planM:false
            })}
          />
        )}
        contentContainerStyle={styles.listaContenido}
      />

      {/* Modal para filtros */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Aplicar Filtros</Text>
            
            <TextInput
              placeholder="Precio Mínimo"
              style={styles.input}
              value={precioMin}
              keyboardType="numeric"
              onChangeText={setPrecioMin}
            />
            <TextInput
              placeholder="Precio Máximo"
              style={styles.input}
              value={precioMax}
              keyboardType="numeric"
              onChangeText={setPrecioMax}
            />
            <TextInput
              placeholder="Frecuencia de Recojo"
              style={styles.input}
              value={frecuenciaRecojo}
              onChangeText={setFrecuenciaRecojo}
            />

            <TouchableOpacity style={styles.modalButton} onPress={handleApplyFilters}>
              <Text style={styles.modalButtonText}>Aplicar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#34A853',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PantallaVerPlanes;
