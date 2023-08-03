import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import AddClassForm from '../components/AddClassForm'

function AddClass({navigation, classes, setClasses}) {
  const [clase, setClase] = useState('')
  return (
    <ScrollView contentContainerStyle={styles.contenedorInicio}>
      <Text style={styles.titulo}>Add a new class</Text>
      <AddClassForm 
        navigation={navigation}
        clase={clase}
        classes={classes}
        setClasses={setClasses}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contenedorInicio: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    marginVertical: 20,
    marginHorizontal: '6%',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
})

export default AddClass
