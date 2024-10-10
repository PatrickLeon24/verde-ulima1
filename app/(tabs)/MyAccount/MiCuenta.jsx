import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import styles from './MiCuentaStyles'

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
            source={require('../../../assets/images/BOCAAA.jpg')}
            style={styles.userImage}
          />
          <View style={styles.userDetails}>
            <Text style={styles.userName}>{nombres} {apellidos}</Text>
            <View style={styles.lineatitulo} />
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
            <Ionicons name="create" size={12} color="gray"/>
            <Text style={styles.menuText2}>Editar Perfil</Text> 
            <Ionicons name="chevron-forward-outline" size={12} color="gray" style={styles.flesha}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem2} onPress={() => navigation.navigate('Contrasena')}>  
            < Ionicons name="lock-closed" size={12} color="gray"/>
            <Text style={styles.menuText2}>Cambiar Contraseña</Text> 
            <Ionicons name="chevron-forward-outline" size={12} color="gray" style={styles.flesha}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem3} onPress={handleLogout}>  
            <Ionicons name="log-out-outline" size={12} color="gray"/>
            <Text style={styles.menuText3}>Cerrar Sesión</Text> 
            <Ionicons name="chevron-forward-outline" size={12} color="gray" style={styles.flesha}/> 
          </TouchableOpacity>
        </View>


        {/* Mostrar solo para tipo de usuario Cliente */}
        {tipousuario === 'Cliente' && (
        <View style={styles.container2}>
          <Text style={styles.titu2}>Servicios</Text>
          <TouchableOpacity style={styles.menuItem2} onPress={() => navigation.navigate('MiPedido')}>
            <Ionicons name="cart" size={12} color="gray"/>  
            <Text style={styles.menuText2}>Ver mi Pedido</Text> 
            <Ionicons name="chevron-forward-outline" size={12} color="gray" style={styles.flesha}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem2} onPress={() => navigation.navigate('MiPlan')}>  
            < Ionicons name="reader-outline" size={12} color="gray"/>
            <Text style={styles.menuText2}>Ver mi Plan</Text> 
            <Ionicons name="chevron-forward-outline" size={12} color="gray" style={styles.flesha}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem3} onPress={() => navigation.navigate('MisPuntos')}>  
            <Ionicons name="ticket-sharp" size={12} color="gray"/>
            <Text style={styles.menuText2}>Ver mis Puntos</Text> 
            <Ionicons name="chevron-forward-outline" size={12} color="gray" style={styles.flesha}/> 
          </TouchableOpacity>
        </View>
        )}
      </View>
      
    </SafeAreaView>
  );
};



export default AccountScreen;

//{/*- - - - - - - - - -*/}
//
//<Text style={styles.sectionTitle}>Información Personal</Text>
//<TouchableOpacity style={styles.option} onPress={() => navigation.navigate('MiPerfil')}>
//  <Image
//    source={require('../../../assets/images/EditarPerfil.png')}
//    style={styles.optionIcon}
//  />
//  <Text style={styles.optionText}>Editar Perfil</Text>
//</TouchableOpacity>
//
//<TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Contrasena')}>
//  <Image
//    source={require('../../../assets/images/CambiarContrasena.png')}
//    style={styles.optionIcon}
//  />
//  <Text style={styles.optionText}>Cambiar Contraseña</Text>
//</TouchableOpacity>
//
//<TouchableOpacity style={styles.option} onPress={handleLogout}>
//  <Image
//    source={require('../../../assets/images/CerrarSesion.png')}
//    style={styles.optionIcon}
//  />
//  <Text style={[styles.optionText, { color: 'red' }]}>Cerrar Sesión</Text>
//</TouchableOpacity>
//</View>
//
//{/* Mostrar solo para tipo de usuario Cliente */}
//{tipousuario === 'Cliente' && (
//<View>
//  {/* Sección de Servicios */}
//  <View style={styles.section}>
//    <Text style={styles.sectionTitle}>Servicios</Text>
//    <TouchableOpacity style={styles.option}>
//      <Text style={styles.optionText} onPress={() => navigation.navigate('MiPedido')}>Ver mi Pedido</Text>
//    </TouchableOpacity>
//    <TouchableOpacity style={styles.option}>
//      <Text style={styles.optionText} onPress={() => navigation.navigate('MiPlan')}>Ver mi Plan</Text>
//    </TouchableOpacity>
//    <TouchableOpacity style={styles.option}>
//      <Text style={styles.optionText} onPress={() => navigation.navigate('MisPuntos')}>Ver mis Puntos</Text>
//    </TouchableOpacity>
//  </View>
//</View>
//)}
//