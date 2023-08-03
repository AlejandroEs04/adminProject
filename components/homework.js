import { View, Text, StyleSheet, TouchableHighlight, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { CustomBoton } from './Buttons';

const Homework = ({homework, deleteHomework, colorPreferences}) => {
  const {homeworkName, homeworkDescription, homeworkDate, id} = homework;

  const handleDelete = id => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this homework?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            deleteHomework(id)
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  }

  return (
    
    <View style={colorPreferences === 'dark' ? {...styles.container, backgroundColor: '#282626', color: '#f1f1f1'} : {...styles.container, backgroundColor: '#fff'}}>
      <Text style={colorPreferences === 'dark' ? {...styles.titulo, color: '#fff'} : {...styles.titulo, color: '#000'}}>{homeworkName}</Text>
      <Text style={colorPreferences === 'dark' ? {fontSize: 16, color: '#fff'} : {fontSize: 16, color: '#000'}}>{homeworkDescription}</Text>
      <Text style={colorPreferences === 'dark' ? {fontSize: 18, fontWeight: 'bold', color: '#fff'} : {fontSize: 18, fontWeight: 'bold', color: '#000'}}>{homeworkDate}</Text>

      <View style={{display: 'flex', flexDirection: 'row', gap: 5, marginTop: 5, justifyContent: 'space-around'}}>
        <CustomBoton 
          color='#ff0000'
          text='Delete'
          onPress={() => handleDelete({id})}
          textColor='#FFF'
        />
        <CustomBoton 
          color='#1491ff'
          text='Editar'
          onPress={() => handleDelete({id})}
          textColor='#FFF'
        />
        <CustomBoton 
          color='#1edc00'
          text='Completar'
          onPress={() => handleDelete({id})}
          textColor='#FFF'
        />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15, 
    borderRadius: 10, 
    width: '100%',
    display: 'flex',
    gap: 5,
  },
  titulo: {
    fontSize: 20, 
    fontWeight: 'bold'
  },
})

export default Homework