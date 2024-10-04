import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './estilosCup';


const CuponItem = ({ local, costo_puntos, imagen, descripcion, onPress }) => {
    return(
    <TouchableOpacity onPress={onPress} style={styles.planContainer}>
    {/*<View style={styles.iconContainer}>*/}
        {/*<Ionicons name="image-outline" size={40} color="#999" />*/}
        <Image
            source={{uri: imagen}}
            style= {styles.iconContainer}
        />
   {/*</View>*/}
    <View style={styles.textContainer}>
        <Text style={styles.planNombre}>
            {local}
        </Text>
        <Text style={styles.pepe}>
            {costo_puntos} puntos
        </Text>
        <Text style={styles.planDescripcion} numberOfLines={2}>
            {descripcion}
        </Text>
        
    </View>
    <View style={styles.infoContainer}>
        <Text style={styles.planTime}>
            Canjear
        </Text>
    </View>
  </TouchableOpacity>
    );
};



export default CuponItem;