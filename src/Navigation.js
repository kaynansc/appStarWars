import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Character from './pages/Character';
import { Button } from 'react-native';

const AppStack = createStackNavigator();

export default function Navigation() {

  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode='float'
        screenOptions={{
          headerTitle: '',
          headerTransparent: 'true'
        }}
      >
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="Character" component={Character}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}