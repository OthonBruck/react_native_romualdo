import { Box } from "native-base";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    logo: {
        height: 120,
        width: 70,
        resizeMode: "contain",
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    title: {
        color: 'aliceblue',
        fontSize: 14
    },
    description: {
        color: 'aliceblue',
        fontSize: 13
    }
});

export default function BoxDetalhes({ navigation }) {
    console.log(navigation);
    return (
        <>
            <View height="100%" style={styles.container} >
                <Box safeAreaTop width="90%" height={120} backgroundColor="#1d1f26" borderRadius={10} marginBottom={3} flexWrap='wrap' onClick={() => {
                    navigation.navigate('Search');
                }}>
                    <Box width='25%'>
                        <Image
                            style={styles.logo}
                            source={require("../../assets/MediaFetch.png")}
                        />

                    </Box>
                    <Box width="75%">
                        <Text style={styles.title}>TITULO DA SERIE/FILME</Text>
                        <Text style={styles.description}>DESCRICAO DA SERIE/FILME</Text>
                    </Box>
                </Box>
            </View>
        </>
    );
}
