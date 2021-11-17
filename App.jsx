import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Main from './src/screen/Main';
import Pesquisa from './src/screen/Pesquisa';
import Favoritos from './src/screen/Favoritos';
import Details from './src/screen/Details';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        drawerStyle: {
          backgroundColor: '#393E46',
          width: 240,
        },
        drawerLabelStyle: {
          color: "#FD7014"
        },
        drawerActiveBackgroundColor: '#222831'
      }}>
        <Drawer.Screen options={{
          headerStyle: {
            backgroundColor: '#393E46',
            borderBottomWidth: 1
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#eeeeee',
        }} name="Principal" component={Main} />
        <Drawer.Screen options={{
          headerStyle: {
            backgroundColor: '#393E46',
            borderBottomWidth: 1
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#eeeeee',
        }} name="Pesquisa" component={Pesquisa} />
        <Drawer.Screen options={{
          headerStyle: {
            backgroundColor: '#393E46',
            borderBottomWidth: 1
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#eeeeee',
        }} name="Favoritos" component={Favoritos} />
        <Drawer.Screen options={{
          headerStyle: {
            backgroundColor: '#393E46',
            borderBottomWidth: 1
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#eeeeee',
        }} name="Detalhes" component={Details} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}