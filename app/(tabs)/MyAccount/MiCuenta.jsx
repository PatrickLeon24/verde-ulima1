import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import styles from './MiCuentaStyles';

const AccountScreen = ({ navigation}) => {

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

    const unsubscribe = navigation.addListener('focus', () => {
      getUserData();
    });

    getUserData();

    return unsubscribe;
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
  console.log("User Data:", userData);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
            source={require('../../../assets/images/xd.jpg')}
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
          <View style={styles.container2}>
            <Text style={styles.titu2}>Información Personal</Text>
            <TouchableOpacity style={styles.menuItem2} onPress={() => navigation.navigate('MiPerfil')}>
              <Ionicons name="create" size={16} color="gray"/>
              <Text style={styles.menuText2}>Editar Perfil</Text> 
              <Ionicons name="chevron-forward-outline" size={16} color="gray" style={styles.flesha}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem2} onPress={() => navigation.navigate('Contrasena')}>  
              <Ionicons name="lock-closed" size={16} color="gray"/>
              <Text style={styles.menuText2}>Cambiar Contraseña</Text> 
              <Ionicons name="chevron-forward-outline" size={16} color="gray" style={styles.flesha}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem3} onPress={handleLogout}>  
              <Ionicons name="log-out-outline" size={16} color="gray"/>
              <Text style={styles.menuText3}>Cerrar Sesión</Text> 
              <Ionicons name="chevron-forward-outline" size={16} color="gray" style={styles.flesha}/> 
            </TouchableOpacity>
          </View>

          {/* Mostrar solo para tipo de usuario Cliente */}
          {tipousuario === 'Cliente' && (
            <View style={styles.container2}>
              <Text style={styles.titu2}>Servicios</Text>
              <TouchableOpacity style={styles.menuItem2} onPress={() => navigation.navigate('MiPedido')}>
                <Ionicons name="cart" size={16} color="gray"/>  
                <Text style={styles.menuText2}>Ver mi Pedido</Text> 
                <Ionicons name="chevron-forward-outline" size={16} color="gray" style={styles.flesha}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem2} onPress={() => navigation.navigate('MiPlan')}>  
                <Ionicons name="reader-outline" size={16} color="gray"/>
                <Text style={styles.menuText2}>Ver mi Plan</Text> 
                <Ionicons name="chevron-forward-outline" size={16} color="gray" style={styles.flesha}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem2} onPress={() => navigation.navigate('MisPuntos')}>  
                <Ionicons name="ticket-sharp" size={16} color="gray"/>
                <Text style={styles.menuText2}>Ver mis Puntos</Text> 
                <Ionicons name="chevron-forward-outline" size={16} color="gray" style={styles.flesha}/> 
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem3} onPress={() => navigation.navigate('MisRecojos', {userData})}>  
                <Ionicons name="archive" size={16} color="gray"/>
                <Text style={styles.menuText2}>Ver mis recojos</Text> 
                <Ionicons name="chevron-forward-outline" size={16} color="gray" style={styles.flesha}/> 
              </TouchableOpacity>

              

            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;


