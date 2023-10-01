import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import styles from './cartItem.style'
import { Feather } from "@expo/vector-icons";

const cartItem = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>Nombre</Text>
      </View>
      <View style={styles.details}>
        <View>
          <Text>Cantidad</Text>
          <TextInput>Precio</TextInput>
        </View>
        <Pressable>
          <Feather name="trash" size={24} color={"red"} />
        </Pressable>
      </View>
    </View>
  );
};

export default cartItem;
