import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import GetStarted from '../screens/Auth/GetStarted';
import FamilyPlusDashboard from '../screens/FamilyPlus';
import AggressivePortfolio from '../screens/Aggressive';
import {RootStackParamList} from './types';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'GetStarted'}
      >
        <Screen name="GetStarted" component={GetStarted} />
        <Screen name="FamilyPlusDashboard" component={FamilyPlusDashboard} />
        <Screen name="AggressivePortfolio" component={AggressivePortfolio} />
      </Navigator>
    </NavigationContainer>
  );
}
