import { Center, Heading, Input, Stack, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

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

export default function Pesquisa() {
  return (
    <>
      <View backgroundColor="#252730" height="100%" flexWrap="nowrap">
        <Center flex={1} px="3">

          <Stack
            space={4}
            w={{
              base: "70%",
              md: "20%",
            }}
          >
            <Center>
              <Heading textAlign="center" mb="10" style={{ color: 'white' }}>
                Pesquisar
              </Heading>
            </Center>
            <Input variant="outline" placeholder="Pesquise" />
          </Stack>
        </Center>
      </View>
    </>
  );
}
