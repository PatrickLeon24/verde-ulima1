import { StyleSheet } from 'react-native';
const RecojoStyle = StyleSheet.create({
        container: {
          padding: 20,
        },
        card: {
          padding: 15,
          marginVertical: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
        },
        cardTitle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        cardText: {
          fontSize: 16,
        },
        buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%', 
          marginTop: 20,
        },
      
        modalBackground: {
          flex: 1,
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        },
        modalContainer: {
          width: '80%', 
          backgroundColor: 'white', 
          borderRadius: 10,
          padding: 20,
          elevation: 5, 
          alignItems: 'center',
        },
        modalTitle: {
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
        },
      });

export default RecojoStyle;