

import React, { useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
//splash screen
import SplashScreen from 'react-native-splash-screen'

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//screens
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: { productId: string }
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
  useEffect(()=>{
    SplashScreen.hide();
  },[]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen 
        name='Home'
        component={Home}
        options={{title: "Welcome to HAR TARAF",headerTitleAlign: "center"}}
        />

        <Stack.Screen
        name = 'Details'
        component={Details}
        options={{title: "Detials of products"}}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Greyish white background color
    padding: 20,
  },
  top: {
    alignItems: 'center',
    marginTop: 20,
  },
  topText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', // Text color set to black
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  },
  middleText: {
    fontSize: 24,
    color: 'black', // Text color set to black
    marginTop: 40,
    marginBottom: 40,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  bottomLeft: {
    flex: 1,
  },
  bottomRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  bottomText: {
    fontSize: 16,
    color: 'black', // Text color set to black
  },
  sosBox: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  sosText: {
    color: 'black', // Text color set to black
    fontWeight: 'bold',
  },
});

export default App;