import { View,Text, Modal, SafeAreaView ,StyleSheet,TextInput,ScrollViewBase, ScrollView, Pressable} from 'react-native'
import React, {useState} from 'react'
import DatePicker from 'react-native-date-picker'

export default function Formulario(props) {
    const {modalVisible, setModalVisible}=props
    const [patient, setPatient] = useState('')
    const [owner, setOwner] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dateReg, setDateReg] = useState(new Date())
    const [symptoms, setSymptoms] = useState('')
    return (
      <Modal animationType='slide' visible={modalVisible}>
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <Text style={styles.title}>New {''} 
                <Text style={styles.titleBold}>
                        Appointment
                </Text>
            </Text>
            <Pressable style={styles.btnCancel} onLongPress={()=>{setModalVisible(false)}}>
                <Text style={styles.btnCancelText}>X Cancelar</Text>
            </Pressable>

            <View style={styles.field}>
                <Text style={styles.label}>Patient's Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Patient's Name"
                    placeholderTextColor={'#666'}
                    value={patient}
                    onChangeText={setPatient}
                ></TextInput>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Owner's Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Owner's Name"
                    placeholderTextColor={'#666'}
                    value={owner}
                    onChangeText={setOwner}
               ></TextInput>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Owner's Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Owner's Email"
                    placeholderTextColor={'#666'}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                ></TextInput>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Owner's Phone</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Owner's Phone"
                    placeholderTextColor={'#666'}
                    keyboardType='number-pad'
                    value={phone}
                    onChangeText={setPhone}
 
                    maxLength={10}
                ></TextInput>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Date of Registration</Text>
                <View style={styles.dataContainer}>
                    <DatePicker
                    date={dateReg}
                    locale='us'
                    onDateChange={(date)=>setDateReg(date)}
                    >
                    </DatePicker>
                </View>
           </View>

            <View style={styles.field}>
                <Text style={styles.label}>Patient's Symptoms</Text>
                <TextInput
                    style={[styles.input,styles.syntomsInput] } 
                    placeholder="Patient's Symptoms"
                    placeholderTextColor={'#666'}
                    value={symptoms}
                    onChangeText={setSymptoms}
                    multiline={true}
                    numberOfLines={4}
                ></TextInput>
            </View>
    </ScrollView>
    </SafeAreaView>
    </Modal>
  )
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:'#6D28D9',
    flex:1,
    marginTop:30,
    color:'#FFF'
  },
    title:{
        fontSize:30,
        fontWeight:'600',
        textAlign:'center',
        marginTop:30,
        color:'#FFF'
    },
    titleBold:{
        fontWeight:'900',
        color:'#FFF'
    },
    input:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        marginBottom:15

    },
    label:{
        color:'#fff',
        marginBottom:10,
        marginTop:15,
        fontSize:20,
        fontWeight:'600'

    },
    field:{
        marginTop:10,
        marginHorizontal:30,
    },
    syntomsInput:{
        height:100
    },
    dataContainer: {
        backgroundColor:'#fff',
        borderRadius:10,       

    },
    btnCancel:{
        marginVertical:30,
        backgroundColor:'#5827A4',
        marginHorizontal:30,
        padding:15,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#fff'
    },
    btnCancelText:{
            color:'#fff',
            textAlign:'center',
            fontWeight:'900',
            fontSize:16,
            textTransform:'uppercase'

    }
})