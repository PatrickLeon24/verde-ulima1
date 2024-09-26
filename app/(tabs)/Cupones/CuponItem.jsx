import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './estilosCup';


const CuponItem = ({ nombre, precio, imagen, descripcion, onPress }) => {
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
            {nombre}
        </Text>
        <Text style={styles.planDescripcion} numberOfLines={1}>
            {descripcion}
        </Text>
        <Text style={styles.pepe}>
            {precio} puntos
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