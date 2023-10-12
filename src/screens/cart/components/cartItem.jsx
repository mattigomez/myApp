import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import styles from './cartItem.style'
import { Feather } from "@expo/vector-icons";

const cartItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: item.image
          }}
        />
      </View>
      <View>
        <Text style={styles.name}>{item.title}</Text>
      </View>
      <View style={styles.details}>
        <View>
          <Text>{item.quantity}</Text>
          <Text>{item.price}</Text>
        </View>
        <Pressable>
          <Feather name="trash" size={24} color={"red"} />
        </Pressable>
      </View>
    </View>
  );
};

export default cartItem;
