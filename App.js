// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './pages';
import Settings from './pages/Settings';
import AddHomework from './pages/AddHomework';
import AddCategory from './pages/AddCategory';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Index} 
          options={{ 
            title: 'Home' ,
            headerStyle: {
              backgroundColor: '#3a3737',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Settings" 
          component={Settings}  
          options={{ 
            title: 'Settings',
            headerStyle: {
              backgroundColor: '#3a3737',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }} 
        />
        <Stack.Screen 
          name='AddHomework'
          component={AddHomework}
          options={{ 
            title: 'New Homework',
            headerStyle: {
              backgroundColor: '#3a3737',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name='AddCategory'
          component={AddCategory}
          options={{ 
            title: 'New Category', 
            headerStyle: {
              backgroundColor: '#3a3737',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;