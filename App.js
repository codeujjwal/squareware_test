import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Tickets from './src/screens/Tickets';
import Messages from './src/screens/Messages';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 0,
          },
          tabBarShowLabel: false,
          tabBarIcon: () => {
            if (route.name === 'Home') {
              return <Image source={require('./assets/icons/Home.png')} />;
            }
            if (route.name === 'Tickets') {
              return <Image source={require('./assets/icons/tckt.png')} />;
            }
            if (route.name === 'Profile') {
              return <Image source={require('./assets/icons/profile.png')} />;
            }
            if (route.name === 'Messages') {
              return <Image source={require('./assets/icons/msg.png')} />;
            }
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#717171',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Tickets" component={Tickets} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
