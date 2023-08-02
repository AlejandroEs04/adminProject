import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { CustomBoton } from './Buttons';

const styles = StyleSheet.create({
    texto: {
        fontSize: 15,
        color: '#008A8C',
        fontWeight: 'bold',
    },
    inputContainer: {
        margin: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    
})

export default function AddHomeworkForm({setHomework}) {
    const [homeworkName, setHomeworkName] = useState('');
    const [homeworkDate, setHomeworkDate] = useState('');
    const [homeworkDescription, setHomeworkDescription] = useState('');
    
    const onPress = () => {
        setHomework({homeworkName, homeworkDescription, homeworkDate})

        setHomeworkName('')
        setHomeworkDescription('')
        setHomeworkDate('')
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
                    keyboardType='number-pad'
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
                color='#565456'
                text='Save Homework'
                textColor='#f1f1f1'
                onPress={onPress}
            />
            
        </View>
    )
    
}

