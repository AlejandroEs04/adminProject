// In App.js in a new project
import * as React from 'react';
import {useEffect, useState} from 'react'
import { Appearance, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Index from './pages';
import Settings from './pages/Settings';
import AddHomework from './pages/AddHomework';
import AddClass from './pages/AddClass';

const Stack = createNativeStackNavigator();


function App() {

  const [homeworks, setHomeworks] = useState([])
  const [classes, setClasses] = useState([])

  const colorPreferences = Appearance.getColorScheme();

  useEffect(() => {
    const getData = async() => {
      try {
        const jsonValue = await AsyncStorage.getItem('homeworks');
        setHomeworks(JSON.parse(jsonValue));
      } catch (e) {
        console.log(e)
      }
    }
    getData(homeworks)
  }, [])

  useEffect(() => {
    const saveData = async(homeworks) => {
      try {
        const jsonValue = JSON.stringify(homeworks);
        await AsyncStorage.setItem('homeworks', jsonValue);
      } catch (e) {
        console.log(e)
      }
    }
    saveData(homeworks)
  }, [homeworks])

  const deleteHomework = id => {
    const updateHomeworks = homeworks.filter(homework => homework.id !== id.id);
    setHomeworks(updateHomeworks)
  }

  const AddHomeworkComponent = ({navigation}) => {
    return <AddHomework 
      navigation={navigation}
      setHomeworks={setHomeworks} 
      homeworks={homeworks} 
      colorPreferences={colorPreferences}
    />
  }

  const IndexComponent = ({navigation}) => {
    return <Index 
      colorPreferences={colorPreferences}
      homeworks={homeworks} 
      classes={classes}
      navigation={navigation} 
      deleteHomework={deleteHomework}
    />
  }

  const AddClassComponent = ({navigation}) => {
    return <AddClass 
      navigation={navigation} 
      classes={classes}
      setClasses={setClasses}
    />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={IndexComponent} 
          options={{ 
            title: 'Home',
            headerTitleAlign: 'center',
            headerTintColor: '#f1f1f1',
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#282626'
            }
          }}
        />
        <Stack.Screen 
          name="Settings" 
          component={Settings}  
          options={{ 
            title: 'Settings',
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: 'bold',
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#494949'
            }
          }} 
        />
        <Stack.Screen 
          name='AddHomework'
          component={AddHomeworkComponent}
          options={{ 
            title: 'New Homework',
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: 'bold',
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#35acfa'
            }
          }}
        />
        <Stack.Screen 
          name='AddClass'
          component={AddClassComponent}
          options={{ 
            title: 'New Class',
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: 'bold',
              color: '#fff'
            },
            headerStyle: {
              backgroundColor: '#f44343'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;