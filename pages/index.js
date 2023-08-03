import React, { useState, Component, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import { CustomBoton, ImageBoton } from '../components/Buttons'
import Homework from '../components/homework'
import Clase from '../components/Clase'

function Index({colorPreferences, navigation, homeworks, deleteHomework, classes}) {
  return (
    <View style={colorPreferences === 'dark' ? {flex: 1, backgroundColor: '#3d3c3c'} : {flex: 1}}>
    <ScrollView nestedScrollEnabled={true} contentContainerStyle={styles.contenedorInicio}>
        <View>
          <Text style={colorPreferences === 'dark' ? {...styles.titulo, color: '#f1f1f1'} : styles.titulo}>Opciones</Text>
          <View style={styles.contenedorBtn}>
            <ScrollView horizontal contentContainerStyle={styles.contenedorBtn}>

              <ImageBoton 
                url='https://cdn.icon-icons.com/icons2/950/PNG/512/add_icon-icons.com_74155.png'
                text='Add Homework'
                onPress={() => navigation.navigate('AddHomework')}
              />

              <ImageBoton 
                url='https://cdn.icon-icons.com/icons2/3628/PNG/512/category_icon_227335.png'
                text='Add Class'
                onPress={() => navigation.navigate('AddClass')}
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
          <Text style={colorPreferences === 'dark' ? {...styles.titulo, color: '#f1f1f1'} : styles.titulo}>Tareas</Text>

          {homeworks && homeworks.length ? (
            <View style={{display: 'flex', gap: 10,}}>
              {homeworks.map(homework => (
                <Homework 
                  key={homework.id}
                  homework={homework}
                  deleteHomework={deleteHomework}
                  colorPreferences={colorPreferences}
                />
              ))}
            </View>
          ) : (
            <Text style={{color: '#004dff', fontSize: 28, fontWeight: '900'}}>No hay Tareas Aun</Text>
          )}

          
          
        </View>

        <View style={{marginTop: 20}}>
          <Text style={colorPreferences === 'dark' ? {...styles.titulo, color: '#f1f1f1'} : styles.titulo}>Materias</Text>

          {classes && classes.length ? (
            <View style={{display: 'flex', gap: 10,}}>
              {classes.map(clase => (
                <Clase />
              ))}
            </View>
          ) : (
            <Text style={colorPreferences === 'dark' ? {...styles.alerta, color: '#45e9fa'} : {...styles.alerta, color:'#00c3d7'}}>No hay Clases Aun</Text>
          )}
        </View>
    </ScrollView>
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
    paddingBottom: 50,
    marginHorizontal: '4%',
    gap: 8,
  },
  titulo: {
    fontSize: 26,
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
  homeworksContainer: {
    display: 'flex',
    width: '100%',
    gap: 10,
    marginTop: 10,
    paddingBottom: 10,
  },
  alerta: {
    fontSize: 28, 
    fontWeight: '900'
  }
})

export default Index
