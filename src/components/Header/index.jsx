import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, Box, HStack, Icon, IconButton, StatusBar } from "native-base";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { height, style } from "styled-system";

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 34,
    resizeMode: "contain",
  },
});

export default function AppBar() {
  return (
    <>
      <StatusBar backgroundColor="#2C2C2C" barStyle="light-content" />
      <Box safeAreaTop backgroundColor="#2C2C2C" />
      <HStack
        bg="#2C2C2C"
        px={1}
        py={3}
        justifyContent="space-between"
        alignItems="center"
        borderBottomWidth="2px"
        borderBottomColor="#ff6740"
      >
        <HStack space={4} alignItems="center">
          <IconButton
            icon={
              <Icon
                size="sm"
                as={<MaterialIcons name="menu" />}
                color="white"
              />
            }
          />
          <Image
            style={styles.logo}
            source={require("../../assets/MediaFetch.png")}
          />
        </HStack>
        <HStack space={2}>
          <IconButton
            icon={
              <Icon
                as={<MaterialIcons name="search" />}
                color="#ff6740"
                size={8}
              />
            }
          />
          <Avatar
            source={{
              uri: "https://pbs.twimg.com/profile_images/929409889788510208/gRr2f7rZ_400x400.jpg",
            }}
          />
        </HStack>
      </HStack>
    </>
  );
}
