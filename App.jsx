import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import Favoritos from "./src/screen/Favoritos";
import Main from "./src/screen/Main";
import Pesquisa from "./src/screen/Pesquisa";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator activeColor="#f0edf6" initialRouteName="Home"
            inactiveColor="#ff6740"
            barStyle={{ backgroundColor: '#2C2C2C' }}>
            <Tab.Screen name="Home" component={Main} />
            <Tab.Screen name="Search" component={Pesquisa} />
            <Tab.Screen name="Favorito" component={Favoritos} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}
