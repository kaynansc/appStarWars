import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Character from './pages/Character';

const AppStack = createStackNavigator();

export default function Navigation() {

  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode='none'
      >
        <AppStack.Screen name="Main" component={Main}/>
        <AppStack.Screen name="Character" component={Character}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}