import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
// Tambahkan screen lain yang terkait dengan otentikasi jika ada

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* Tambahkan screen lain yang terkait dengan otentikasi di sini */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
