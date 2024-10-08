import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const AccountScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

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

    // Escuchar el evento de enfoque para obtener los datos actualizados
    const unsubscribe = navigation.addListener('focus', () => {
      getUserData();
    });

    getUserData(); // Cargar los datos cuando el componente se monta

    return unsubscribe; // Limpiar el evento al desmontar el componente
  }, [navigation]);

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.replace('Login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  if (!userData) {
    return <Text>Cargando...</Text>;
  }

  const { nombres, apellidos, direccion, DNI, email, tipousuario } = userData;
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Barra Superior */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Mi cuenta</Text>
      </View>

      {/* Información del Usuario */}
      <View style={styles.userInfo}>
        <Image
          source={require('../../../assets/images/SAzRztbw_400x400.jpg')}
          style={styles.userImage}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{nombres} {apellidos}</Text>
          <Text style={styles.userInfoText}>DNI: {DNI}</Text>
          <Text style={styles.userInfoText}>Dirección: {direccion}</Text>
          <Text style={styles.userInfoText}>Email: {email}</Text>
        </View>
      </View>

      {/* Sección de Información Personal */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información Personal</Text>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('MiPerfil')}>
          <Image
            source={require('../../../assets/images/EditarPerfil.png')}
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Contrasena')}>
          <Image
            source={require('../../../assets/images/CambiarContrasena.png')}
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Cambiar Contraseña</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleLogout}>
          <Image
            source={require('../../../assets/images/CerrarSesion.png')}
            style={styles.optionIcon}
          />
          <Text style={[styles.optionText, { color: 'red' }]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Mostrar solo para tipo de usuario Cliente */}
      {tipousuario === 'Cliente' && (
        <View>
          {/* Sección de Servicios */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Servicios</Text>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText} onPress={() => navigation.navigate('MiPedido')}>Ver mi Pedido</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText} onPress={() => navigation.navigate('MiPlan')}>Ver mi Plan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText} onPress={() => navigation.navigate('MisPuntos')}>Ver mis Puntos</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Usa backgroundColor en lugar de background
    paddingVertical: 40
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  botonRetroceso: {
    paddingLeft: 10,
  },
  textoBarra: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userDetails: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userInfoText: {
    fontSize: 14,
    color: 'gray',
  },
  section: {
    marginVertical: 16,
    alignItems: 'center', // Centramos los textos dentro de cada sección
    justifyContent: 'center',
    width: '100%', // Asegurar que ocupe todo el ancho
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  option: {
    width: '90%', // Ancho de las opciones para que ocupen el 90% del ancho de la pantalla
    flexDirection: 'row', // Coloca la imagen y el texto en fila
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center', // Alinea verticalmente la imagen y el texto
    justifyContent: 'center', // Centramos tanto la imagen como el texto
  },
  optionIcon: {
    width: 24, // Tamaño del ícono
    height: 24, // Tamaño del ícono
    marginRight: 12, // Espacio entre el ícono y el texto
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center', // Asegura que el texto esté centrado
  },
});

export default AccountScreen;