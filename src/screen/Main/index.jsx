import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BoxDetalhes from "../../components/BoxDetalhes";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";

export default function Main({ navigation }) {
  const [dado, setDado] = useState([])
  const [tv, setTv] = useState([])
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await api.get(endpoints.trendingMovie);
      setDado(response.data.results)
    };
    const fetchTV = async () => {
      const response = await api.get(endpoints.trendingTV);
      setTv(response.data.results)
    };
    fetchTV()
    fetchMovie()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#222831" }}>
      <ScrollView>
        <Text style={{ color: '#eeeeee', fontSize: 20 }}>Filmes em alta</Text>
        {dado && dado.slice(0, 5).map((dado) => {
          return (<>
            <TouchableWithoutFeedback style={{ backgroundColor: 'white' }} onPress={() => navigation.navigate("Detalhes", { selectedId: dado.id, tipo: dado.name ? 'pessoa' : "filme" })}>
              <View>
                <BoxDetalhes data={dado} />
              </View>
            </TouchableWithoutFeedback>
          </>)
        })}
        <Text style={{ color: '#eeeeee', fontSize: 20 }}>Series em alta</Text>
        {tv && tv.slice(0, 5).map((dado) => {
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
  );
}