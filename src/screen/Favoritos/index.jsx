import { View } from "native-base";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { justifyContent, lineHeight } from "styled-system";
import { marginLeft } from "styled-system";
import { fontSize } from "styled-system";
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
        <Text style={styles.title}>Favoritos</Text>
        <BoxDetalhes navigation={navigation} />
      </View>
    </>
  );
}
