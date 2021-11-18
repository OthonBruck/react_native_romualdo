import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import BoxDetalhes from "../../components/BoxDetalhes";

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 24,
    marginLeft: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});



export default function Favoritos({ navigation }) {
  const [favoritos, setFavoritos] = useState([])
  useEffect(() => {
    async function Async() {
      const dados = JSON.parse(await AsyncStorage.getItem("favoritos"));
      console.log(dados);
      if (dados === null) {
        setFavoritos([]);
      } else {
        setFavoritos(dados);
      }
    }
    Async()
  }, []);
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#222831" }}>
        <ScrollView>
          <Text style={{ color: '#eeeeee', fontSize: 20 }}>Favoritos</Text>
          {favoritos && favoritos.map((dado) => {
            return (<>
              <TouchableWithoutFeedback style={{ backgroundColor: 'white' }} onPress={() => navigation.navigate("Detalhes", { selectedMovie: dado.id })}>
                <View>
                  <BoxDetalhes data={dado} />
                </View>
              </TouchableWithoutFeedback>
            </>)
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
