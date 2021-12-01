import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    logo: {
        height: 117,
        width: 100,
        resizeMode: "contain",
    },
    container: {
        marginTop: 10,
        backgroundColor: "#393E46",
        width: '90%',
        borderRadius: 4,
        height: 120,
        flexDirection: 'row',
        padding: 2
    },
});

export default function BoxDetalheSerie({ navigation, data }) {
    return (
        <>
            <SafeAreaView style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <View style={styles.container}>
                    <View style={{ display: 'flex', alignItems: 'center', width: '20%', height: '100%', alignContent: 'flex-end' }}>
                        <Image style={styles.logo} source={{ uri: `http://image.tmdb.org/t/p/w500/${data.poster_path}` }} />
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center', width: '80%', height: '20%', alignContent: 'flex-end' }}>
                        <Text style={{ color: '#eeeeee', fontWeight: 'bold' }}>{data.name}</Text>
                        <View style={{ width: '80%', height: 'auto', marginTop: 3 }}>
                            <Text style={{ color: '#eeeeee', fontSize: 10 }}>Popularidade: {data.popularity}</Text>
                        </View>
                        <View style={{ width: '80%', height: 'auto', marginTop: 3 }}>
                            <Text style={{ color: '#eeeeee', fontSize: 10 }}>Contagem de Votos: {data.vote_count}</Text>
                        </View>
                        <View style={{ width: '80%', height: 'auto', marginTop: 3 }}>
                            <Text style={{ color: '#eeeeee', fontSize: 10 }}>Vote Average: {data.vote_average}</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}
