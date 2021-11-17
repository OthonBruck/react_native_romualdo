import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, TouchableWithoutFeedback, View } from "react-native";
import BoxDetalhes from "../../components/BoxDetalhes";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";

export default function Pesquisa({ navigation }) {
  const [dado, setDado] = useState([])

  function movie(page, query) {
    const queryParams = new URLSearchParams({ page, query }).toString();
    return api.get(endpoints.searchMovie(queryParams));
  }
  useEffect(() => {
    const moviePage = async () => {
      const response = await movie(1, "spider");
      console.log(response);
      setDado(response.data.results);
    }
    moviePage()
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#222831" }}>
      <ScrollView>
        {dado && dado?.slice(0, 5).map((dado) => {
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
  );
}
