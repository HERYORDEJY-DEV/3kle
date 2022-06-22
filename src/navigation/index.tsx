import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GetStarted from '../screens/Auth/GetStarted';
import {NavigationContainer} from '@react-navigation/native';
import FamilyPlusDashboard from '../screens/FamilyPlus';
import AggressivePortfolio from '../screens/Aggressive';

const {Navigator, Screen} = createStackNavigator();

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
