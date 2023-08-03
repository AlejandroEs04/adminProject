import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import AddHomeworkForm from '../components/AddHomeworkForm'
import Homework from '../components/homework'

function AddHomework({homeworks, setHomeworks, navigation, colorPreferences}) {
  const [homework, setHomework] = useState({})
  
  return (
    <ScrollView contentContainerStyle={styles.contenedorInicio}>
      <View>
        <Text style={styles.titulo}>Add a new Homework</Text>
        <AddHomeworkForm 
          navigation={navigation}
          homework={homework}
          setHomework={setHomework}
          homeworks={homeworks}
          setHomeworks={setHomeworks}
          colorPreferences={colorPreferences}
        />
      </View>

      <View  style={styles.homeworksContainer}>
        <Text style={{fontSize:25, fontWeight: 'bold'}}>Tareas Actuales</Text>
        {homeworks.map(homework => (
          <Homework 
            key={homework.id}
            homework={homework}
          />
        ))}
      </View>
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
  homeworksContainer: {
    display: 'flex',
    marginTop: 20,
    gap: 10,
    paddingBottom: 10,
  },
})

export default AddHomework
