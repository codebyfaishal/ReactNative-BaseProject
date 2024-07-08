import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DataScreen from '../screens/DataScreen';
import DetailScreen from '../screens/DetailScreen';
// Tambahkan screen lain yang terkait dengan bagian utama aplikasi jika ada

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Data">
      <Stack.Screen name="Data" component={DataScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      {/* Tambahkan screen lain yang terkait dengan bagian utama aplikasi di sini */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
