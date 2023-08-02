import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AddHomeworkForm from '../components/AddHomeworkForm'

function AddHomework({setHomeworks}) {
  const [homework, setHomework] = useState({})
  
  return (
    <View style={styles.contenedorInicio}>
      <View>
        <Text style={styles.titulo}>Add a new Homework</Text>
        <AddHomeworkForm 
          setHomework={setHomework}
        />
      </View>
    </View>
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

export default AddHomework
