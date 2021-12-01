import { useIsFocused } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import BoxDetalhes from "../../components/BoxDetalhes";
import { getFavoritos } from "../../config/Firebase";


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
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const a = await getFavoritos()
      setFavoritos(a)
    }
    )();
  }, [isFocused])

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#222831" }}>
        <ScrollView>
          {favoritos && favoritos?.map((dado) => {
            return (<>
              <TouchableWithoutFeedback style={{ backgroundColor: 'white' }} onPress={() => navigation.navigate("Detalhes", { selectedId: dado.id, tipo: dado.name ? 'pessoa' : "filme" })}>
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
