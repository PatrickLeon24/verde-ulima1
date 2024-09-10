import React from 'react';
import { View, Text, StyleSheet, SafeAreaView ,Image,TouchableOpacity, Linking} from 'react-native';
import { useRouter } from 'expo-router';

const PantallaConBarraVerde = () => {
    const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior verde */}
      <View style={styles.barraSuperior}>
      <TouchableOpacity 
          onPress={()=>router.push('/MyAccount/MiCuenta')}>
            <Image
          source={require('@/assets/images/SAzRztbw_400x400.jpg') } // Reemplaza con la URL de tu foto
          style={styles.image}
        />
      </TouchableOpacity>
      
       
        <Text style={styles.textoBarra}>Hola, nombre</Text>
        
      </View>
      
      {/* Contenedor de botones */}
      <View style={styles.botonContainer}>
        
        <TouchableOpacity style={styles.button} 
          onPress={()=>router.push('/Menu/Menu2')}>
            <Image
          source={require('@/assets/images/cupon.jpg') } // Reemplaza con la URL de tu foto
          style={styles.image2}
        />
        <Text style={styles.buttonText1}></Text>
          <Text style={styles.buttonText}>CUPONES</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} 
          onPress={()=>router.push('/Planes/VerPlanes')}>
            <Image
          source={require('@/assets/images/reciclaje.jpg') } // Reemplaza con la URL de tu foto
          style={styles.image2}
        />
        <Text style={styles.buttonText1}></Text>
          <Text style={styles.buttonText}>PLANES DE RECOLECCIÓN</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} 
          onPress={()=>router.push('/Menu/Menu2')}>
            <Image
          source={require('@/assets/images/images.jpeg') } // Reemplaza con la URL de tu foto
          style={styles.image2}
        />
        <Text style={styles.buttonText1}></Text>
          <Text style={styles.buttonText}>SOLICITAR RECOJO</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => Linking.openURL('https://wa.me/message/IUHQDJHMMT3QL1')}>
            <Image
          source={require('@/assets/images/WhatsApp_icon.png') } // Reemplaza con la URL de tu foto
          style={styles.image2}
        />
        <Text style={styles.buttonText1}></Text>
          <Text style={styles.buttonText}>CONTÁCTANOS</Text>
        </TouchableOpacity>
        

      </View>
      {/* Contenido en blanco */}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white', // Color de fondo blanco
    },
    barraSuperior: {
      height: 60, // Altura de la barra superior
      backgroundColor: '#34A853', // Color verde para la barra superior
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    textoBarra: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'semibold',
      position: 'absolute'
    },
    botonContainer: {
      flex: 1, // Toma todo el espacio disponible
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    button: {
      backgroundColor: 'white', // Color del botón
      width: 219,               // Ancho fijo del botón
      height: 79,        // Espacio horizontal interno
      borderRadius: 15,            // Hace el botón redondeado
      alignItems: 'center',        // Alinea el texto al centro
      marginVertical: 30, 
      borderWidth: 1,             // Ancho del borde
      borderColor: 'white',
      // Sombra para iOS
      shadowColor: '#000', // Color de la sombra
      shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
      shadowOpacity: 0.25, // Opacidad de la sombra
      shadowRadius: 3.84, // Radio de desenfoque de la sombra     //
      elevation: 10, 
      justifyContent: 'center',
             // Espaciado vertical
    },
    buttonText1: {
      color: '#000000',              // Color del texto
      fontSize: 12,                // Tamaño de la fuente
      fontWeight: 'bold',
      textAlign: 'center', 
      marginVertical:45,
      
      
                // Negrita para el texto
    },
    buttonText: {
      color: '#000000',              // Color del texto
      fontSize: 12,                // Tamaño de la fuente
      fontWeight: 'bold',
      textAlign: 'center', 
      position: 'absolute',
      
      
                // Negrita para el texto
    },
    
    contenidoBlanco: {
      flex: 1,
      backgroundColor: 'white', // Fondo blanco para el resto de la pantalla
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 40,              // Ancho de la imagen circular
      height: 40,             // Alto de la imagen circular
      borderRadius: 20,       // Hace la imagen circular
      marginRight:300,
      
            // Espaciado entre la imagen y el texto
    },
    image1: {
      width: 40,              // Ancho de la imagen circular
      height: 40,             // Alto de la imagen circular
      borderRadius: 20,       // Hace la imagen circular
      
            // Espaciado entre la imagen y el texto
    },
    image2: {
      width: 60,              // Ancho de la imagen circular
      height: 60,             // Alto de la imagen circular
      borderRadius: 30,
      borderWidth: 1,             // Ancho del borde
      borderColor: '#34A853',
          // Hace la imagen circular
      
      
            // Espaciado entre la imagen y el texto
    },
    textoContenido: {
      fontSize: 16,
      color: 'black',
    },
  });
export default PantallaConBarraVerde;
