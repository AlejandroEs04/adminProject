import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { CustomBoton } from './Buttons';


const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    inputContainer: {
        margin: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        borderRadius: 10,
    },
    
})

export default function AddHomeworkForm({navigation, clase, classes, setClasses}) {
    const [ClassName, setClassName] = useState('')
    const [Classroom, setClassroom] = useState('')
    const [ClassDate, setClassDate] = useState('')
    
    // Generate a new and unique ID
    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }
    
    const onPress = () => {

        // Check if all inputs is full
        if([ClassName, Classroom, ClassDate].includes('')) {
            console.log('ERROR')
            return;
        }

        // Create a homework object for adding to array
        const classObject = {
            ClassName,
            Classroom,
            ClassDate
        }

        // Check if the object exist
        if(clase.id) {
            console.log('Ya existe')
        } else {
            // New Homeworks
            classObject.id = generarId();
            setClasses([...classes, classObject])
        }

        setClassName('')
        setClassDate('')
        setClassroom('')
        navigation.navigate('Home')
    }

    return (
        <View>
            <View style={styles.inputContainer}>
               <Text style={styles.texto}>Class name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setClassName}
                    value={ClassName}
                /> 
            </View>

            <View style={styles.inputContainer}>
               <Text style={styles.texto}>Class Date</Text>
               <TextInput
                    style={styles.input}
                    onChangeText={setClassDate}
                    value={ClassDate}
                />  
            </View>

            <View style={styles.inputContainer}>
               <Text style={styles.texto}>Class room</Text>
                <TextInput
                    inputMode='numeric'
                    style={styles.input}
                    onChangeText={setClassroom}
                    value={Classroom}
                /> 
            </View>

            <CustomBoton 
                color='#1491ff'
                text='Save Class'
                textColor='#f1f1f1'
                onPress={onPress}
            />
            
        </View>
    )
    
}

