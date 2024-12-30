import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SesionStackNavigator } from './presentation/routes/SesionStackNavigator';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      {/* <BottomTabNavigator /> */}
      <SesionStackNavigator/>
    </NavigationContainer>
  );
};

export default App;

