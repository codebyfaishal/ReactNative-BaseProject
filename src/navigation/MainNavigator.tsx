import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DataScreen from '../screens/DataScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen'; // Contoh tambahan tab
import AddDataScreen from '../screens/AddDataScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTabs" component={MainTabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="AddData" component={AddDataScreen} />
    </Stack.Navigator>
  );
};

const MainTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Data List" component={DataScreen} options={{ tabBarLabel: 'Data' }} />
      <Tab.Screen name="2" component={DataScreen} options={{ tabBarLabel: '2' }} />
      <Tab.Screen name="3" component={DataScreen} options={{ tabBarLabel: '3' }} />
      {/* Tambahkan tab lainnya di sini jika diperlukan */}
    </Tab.Navigator>
  );
};

export default MainNavigator;
