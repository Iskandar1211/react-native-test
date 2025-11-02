import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkingByRestApi from '../components/WorkingByRestApi';
import React from 'react';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Products: undefined;
};

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen name="Products" component={WorkingByRestApi} />
    </Stack.Navigator>
  );
};

export default Navigation;
