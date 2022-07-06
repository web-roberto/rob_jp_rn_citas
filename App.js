
import React,{useState} from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Modal,
  View,
  Pressable} from 'react-native';
  import Formulario from './src/components/Formulario';

const App = () => {
const [modalVisible, setModalVisible] = useState(false)

  const newAppointmentHandler=()=>{setModalVisible(true)}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Appointments Management {''} </Text>
      <Text style={styles.tituloBold}>Veterinary</Text>
    <Pressable onPress={newAppointmentHandler} style={styles.btnNewAppointment}>
      <Text style={styles.btnNewAppointmentText}>New Appointment</Text>
    </Pressable>
    <Formulario modalVisible={modalVisible} setModalVisible={setModalVisible} />

    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  titulo:{
    textAlign:'center',
    fontSize:30,
    color:'#374151',
    fontWeight:'600'
  },
  tituloBold:{
    textAlign:'center',
    fontWeight: '900',
    color:'#6D28D9'
  },
  container:{
    backgroundColor:'#F3F4F6',
    flex:1
  },
  btnNewAppointment:{
    backgroundColor:'#6D28D9',
    padding:15,
    marginTop:30,
    marginHorizontal:20,
    borderRadius:10

  },
  btnNewAppointmentText:{
    textAlign:'center',
    color:'#FFF',
    fontSize:20,
    fontWeight:'900',
    textTransform:'uppercase'
  }
})

export default App;
