import { Center, View } from "native-base";
import React from "react";
import { StyleSheet, Text } from "react-native";
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
  return (
    <>
      <View backgroundColor="#252730" height="100%" flexWrap="nowrap">
        <Center>
          <Text style={styles.title}>Favoritos</Text>
        </Center>
        <BoxDetalhes navigation={navigation} />
      </View>
    </>
  );
}
