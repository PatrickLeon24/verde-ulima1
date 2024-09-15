import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const AccountScreen = ({navigation}) => {
  const router = useRouter();

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
          source={require('../../../assets/images/SAzRztbw_400x400.jpg')} // Icono del usuario
          style={styles.userImage}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>nombre apellido</Text>
          <Text style={styles.userInfoText}>DNI: XXXXXXXX</Text>
          <Text style={styles.userInfoText}>Dirección:</Text>
        </View>
      </View>

      {/* Sección de Información Personal */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información Personal</Text>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('MiPerfil')}>
          <Text style={styles.optionText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Contrasena')}>
          <Text style={styles.optionText}>Cambiar Contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={[styles.optionText, { color: 'red' }]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Usa backgroundColor en lugar de background
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
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  option: {
    width: '100%',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
  },
});

export default AccountScreen;
