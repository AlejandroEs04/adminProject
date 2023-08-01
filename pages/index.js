import React from 'react'
import { View, Text, StyleSheet, ScrollView, Appearance } from 'react-native'
import { CustomBoton, ImageBoton } from '../components/Buttons'
import { useState } from 'react'

function Index({navigation}) {

  return (
    <View style={styles.contenedorInicio}>
        <View>
          <Text style={styles.titulo}>Opciones</Text>
          <View style={styles.contenedorBtn}>
            <ScrollView horizontal contentContainerStyle={styles.contenedorBtn}>

              <ImageBoton 
                url='https://cdn.icon-icons.com/icons2/950/PNG/512/add_icon-icons.com_74155.png'
                text='Add Homework'
                onPress={() => navigation.navigate('AddHomework')}
              />

              <ImageBoton 
                url='https://cdn.icon-icons.com/icons2/3628/PNG/512/category_icon_227335.png'
                text='Add Category'
                onPress={() => navigation.navigate('AddCategory')}
              />

              <ImageBoton 
                url='https://cdn.icon-icons.com/icons2/933/PNG/512/settings-cogwheel-button_icon-icons.com_72559.png'
                text='Settings'
                onPress={() => navigation.navigate('Settings')}
              />

              
            </ScrollView>
          </View>
        </View>

        <View>
          <Text style={styles.titulo}>Tareas</Text>
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
  img: {
    width: 10,
    height: 10,
  },
  contenedorBtn: {
    marginTop: 5,
    paddingBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
})

export default Index
