import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'navigation/navigation';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IRoute {
  id: string;
  link: keyof RootStackParamList;
  name: string;
}

const Routes = () => {
  const routes: IRoute[] = [
    { id: 'products', link: 'Products', name: 'Продукты' },
  ];
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView>
      {routes.map(route => (
        <TouchableOpacity
          key={route.id}
          onPress={() => navigation.navigate(route.link)}
        >
          <Text key={route.id}>{route.name}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default Routes;
