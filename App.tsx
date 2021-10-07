import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './components/Profile';
import Sumadora from './components/SumCalculator'
import TablaDeMultiplicar from './components/MultiplyTable';
import Video from './components/VideoPlayer';
import textNumberToIntenger from './components/Converter';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Perfil')
          iconName = focused ? 'person-circle' : 'person-circle-outline';
        else if (route.name === 'Sumadora')
          iconName = focused ? 'calculator' : 'calculator-outline';
        else if (route.name === 'Traductor')
          iconName = focused ? 'text' : 'text-outline';
        else if (route.name === 'Tabla')
          iconName = focused ? 'apps' : 'apps-outline';
        else if (route.name === 'Video')
          iconName = focused ? 'play-circle' : 'play-circle-outline';
        else
          iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#001f3d',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Perfil" component={Profile} />
      <Tab.Screen name="Sumadora" component={Sumadora} />
      <Tab.Screen name="Traductor" component={textNumberToIntenger} />
      <Tab.Screen name="Tabla" component={TablaDeMultiplicar} />
      <Tab.Screen name="Video" component={Video} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}