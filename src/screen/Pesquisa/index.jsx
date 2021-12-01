import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, CheckBox, Button } from "react-native";
import { borderRadius, justifyContent, marginLeft } from "styled-system";
import BoxDetalhes from "../../components/BoxDetalhes";
import BoxDetalheSerie from "../../components/BoxDetalhesSerie";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";

export default function Pesquisa({ navigation }) {
  const [dado, setDado] = useState([])
  const [filme, setFilme] = useState(true)
  const [serie, setSerie] = useState(false)
  const [query, setQuery] = useState('')

  const styles = StyleSheet.create({
    logo: {
      height: 117,
      width: 100,
      resizeMode: "contain",
    },
    container: {
      marginTop: 10,
      backgroundColor: "#393E46",
      width: '75%',
      borderRadius: 4,
      height: 175,
      flexDirection: 'row',
      padding: 2,
      marginLeft: 60
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 5,
      backgroundColor: '#eeeeee',
      borderRadius: 10
    },
    checkbox: {
      alignSelf: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 5,
      display: 'flex',
      justifyContent: 'space-evenly'
    },
  });

  const filmeSelected = () => {
    setFilme(true)
    setSerie(false)
  }
  const serieSelected = () => {
    setFilme(false)
    setSerie(true)
  }

  const movie = async (page, query) => {
    const queryParams = new URLSearchParams({ page, query }).toString();
    const resultado = await api.get(endpoints.searchMovie(queryParams))
    return resultado.data.results;
  }

  const tv = async (page, query) => {
    const queryParams = new URLSearchParams({ page, query }).toString();
    const resultado = await api.get(endpoints.searchTV(queryParams))
    return resultado.data.results;
  }

  const pesquisar = async () => {
    if (filme) {
      setDado(await movie(1, query))
    }
    if (serie) {
      setDado(await tv(1, query))
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#222831", width: '100%' }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ display: 'flex', alignItems: 'center', width: '100%', height: '20%', alignContent: 'flex-end' }}>
            <Text style={{ color: '#eeeeee', fontWeight: 'bold' }}>Pesquisar</Text>
            <View style={{ width: '80%', height: 'auto', marginTop: 3 }}>
              <TextInput
                onChangeText={setQuery}
                style={styles.input}
                value={query}
              />
            </View>
            <View style={{ width: '80%', height: 'auto', marginTop: 3 }}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  onChange={() => filmeSelected()}
                  value={filme}
                  style={styles.checkbox}
                />
                <Text style={{ color: '#eeeeee', marginTop: 4 }}>Filme</Text>
                <CheckBox
                  onChange={() => serieSelected()}
                  style={styles.checkbox}
                  value={serie}

                />
                <Text style={{ color: '#eeeeee', marginTop: 4 }}>Serie</Text>
              </View>
            </View>
            <View style={{ width: '40%' }}>
              <Button
                style={{ borderRadius: '100px' }}
                color="#FD7014"
                title="Pesquisar"
                onPress={() => pesquisar()}
              />
            </View>
          </View>
        </View>
        {dado && dado?.map((dado) => {
          return (<>
            <TouchableWithoutFeedback style={{ backgroundColor: 'white' }} onPress={() => navigation.navigate("Detalhes", { selectedId: dado.id, tipo: dado.name ? 'pessoa' : "filme" })}>
              <View>
                {filme ?
                  (<BoxDetalhes data={dado} />)
                  :
                  (<BoxDetalheSerie data={dado} />)
                }
              </View>
            </TouchableWithoutFeedback>
          </>)
        })}
      </ScrollView>
    </SafeAreaView >
  );
}
