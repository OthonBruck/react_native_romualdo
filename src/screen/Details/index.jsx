import React, { useEffect, useState } from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getFavoritos, saveFavoritos, deleteFavoritos } from "../../config/Firebase";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        elevation: 2,
        backgroundColor: '#eeeeee',
        marginBottom: 4
    },
    text: {
        fontSize: 10,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#222831',
    },
    logo: {
        marginTop: 10,
        height: 300,
        width: 350,
    },
    container: {
        marginTop: 10,
        backgroundColor: "#393E46",
        width: '90%',
        borderRadius: 4,
        flexDirection: 'row',
        padding: 2,
        display: 'flex',
        justifyContent: 'center'
    },
});

export default function Details({ navigation, route }) {
    const [dado, setDado] = useState([])
    const [provider, setProvider] = useState([])
    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        if (route?.params?.tipo === 'filme') {
            const fetchDetails = async () => {
                const response = await api.get(endpoints.movieDetails(route.params.selectedId));
                setDado(response.data);
            };
            const fetchProvider = async () => {
                const response = await api.get(endpoints.movieProvider(route.params.selectedId))
                setProvider(response.data.results["BR"])
            }
            fetchDetails();
            fetchProvider();
        } else {
            const fetchDetails = async () => {
                const response = await api.get(endpoints.tvDetails(route.params.selectedId));
                setDado(response.data);
            };
            const fetchProvider = async () => {
                const response = await api.get(endpoints.tvProvider(route.params.selectedId))
                console.log(response);
                setProvider(response.data.results["BR"])
            }
            fetchDetails();
            fetchProvider();
        }
    }, [route?.params?.selectedId]);

    useEffect(() => {
        (async () => {
            const a = await getFavoritos()
            setFavoritos(a)
        }
        )();
    }, [])


    const onSave = (dado) => {
        setFavoritos((prevState) => [...prevState, dado])
        saveFavoritos(dado)
    }

    const onRemove = (index) => {
        const newFavorito = favoritos.filter((id) => id.id !== index);
        setFavoritos(newFavorito)
        deleteFavoritos(index)
    }

    console.log(provider);
    return (
        <ScrollView style={{ backgroundColor: '#222831' }} >
            <SafeAreaView style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <View style={styles.container}>
                    <View style={{ width: '95%', display: 'flex', alignItems: 'center' }}>
                        <Text style={{ color: '#eeeeee', fontWeight: 'bold' }}>{dado.title ? dado.title : dado.name}</Text>
                        <Image style={styles.logo} source={{ uri: `http://image.tmdb.org/t/p/original/${dado?.backdrop_path}` }} />
                        <Text style={{ color: '#eeeeee', fontWeight: 'bold', marginTop: 1 }}>Generos: {dado && dado?.genres?.map((a) => a.name).join(", ")}</Text>
                        <Text style={{ color: '#eeeeee', fontWeight: 'bold', fontSize: 12 }}>Descrição: {dado.overview}</Text>
                        <Text style={{ color: '#eeeeee', fontWeight: 'bold', fontSize: 12, marginTop: 2, marginBottom: 2 }}>Onde Assistir: {provider?.flatrate?.map((a) => a.provider_name).join(", ")}</Text>
                        {favoritos && favoritos?.find((dados) => dados.id === dado.id) !== undefined ? (
                            <Pressable style={styles.button} onPress={() => onRemove(dado.id)}>
                                <Text style={styles.text}>Remover Favorito</Text>
                            </Pressable>
                        ) : (
                            <Pressable style={styles.button} onPress={() => onSave(dado)}>
                                <Text style={styles.text}>Adicionar Favorito</Text>
                            </Pressable>
                        )}
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView >
    );
}
