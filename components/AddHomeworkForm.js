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

export default function AddHomeworkForm({navigation, homework, homeworks, setHomeworks, colorPreferences}) {
    const [homeworkName, setHomeworkName] = useState('');
    const [homeworkDate, setHomeworkDate] = useState('');
    const [homeworkDescription, setHomeworkDescription] = useState('');
    
    // Generate a new and unique ID
    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }
    
    const onPress = () => {

        // Check if all inputs is full
        if([homeworkName, homeworkDescription, homeworkDate].includes('')) {
            console.log('ERROR')
            return;
        }

        // Create a homework object for adding to array
        const homeworkObject = {
            homeworkName,
            homeworkDescription,
            homeworkDate
        }

        // Check if the object exist
        if(homework.id) {
            console.log('Ya existe')
        } else {
            // New Homeworks
            homeworkObject.id = generarId();
            setHomeworks([...homeworks, homeworkObject])
        }

        setHomeworkName('')
        setHomeworkDescription('')
        setHomeworkDate('')
        navigation.navigate('Home')
    }

    return (
        <View>
            <View style={styles.inputContainer}>
               <Text style={styles.texto}>Homework name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHomeworkName}
                    value={homeworkName}
                /> 
            </View>

            <View style={styles.inputContainer}>
               <Text style={styles.texto}>Due Date</Text>
               <TextInput
                    inputMode='numeric'
                    maxLength={10}
                    style={styles.input}
                    onChangeText={setHomeworkDate}
                    value={homeworkDate}
                /> 
            </View>

            <View style={styles.inputContainer}>
               <Text style={styles.texto}>Description</Text>
                <TextInput
                    inputMode='text'
                    style={styles.input}
                    onChangeText={setHomeworkDescription}
                    value={homeworkDescription}
                /> 
            </View>

            <CustomBoton 
                color='#1491ff'
                text='Save Homework'
                textColor='#f1f1f1'
                onPress={onPress}
            />
            
        </View>
    )
    
}

