import { StyleSheet } from 'react-native';

const Style_RegisterI = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    header: {
      height: 60,
      backgroundColor: '#34A853',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30
    },
    headerText: {
      color: 'white',
      fontSize: 20,
    },
    subTitle: {
      fontSize: 16,
      marginBottom: 20,
      color: '#333',
      textAlign: 'center'
    },
    input: {
      width: '90%',
      alignSelf: 'center',
      height: 45,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 20
    },
    genderText: {
      fontSize: 16,
      marginBottom: 10,
      textAlign: 'center',
        olor: '#333'
    },
    genderContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    genderButton: {
      backgroundColor: '#ccc',
      paddingVertical: 10,
      paddingHorizontal: 25,
      borderRadius: 10,
      marginHorizontal: 10
    },
    genderButtonSelected: {
      backgroundColor: '#34A853',
    },
    genderButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
    },
    button: {
      backgroundColor: '#000',
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
      width: '90%',
      alignSelf: 'center'
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
    }
});

export default Style_RegisterI;