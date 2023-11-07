import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import styles from "./cartItem.style";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";


import { useDispatch , useSelector } from 'react-redux'
import { removeItem } from '../../../features/cart/cartSlice'


const cartItem = ({ item }) => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  
  const handleRemoveItem = () => {
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View>
        <Text style={styles.name}>{item.title}</Text>
      </View>
      <View style={styles.details}>
        <View style={styles.detailText}>
          <Text style={styles.text}>Cantidad:{item.quantity}</Text>
          <Text style={styles.text}>Precio unitario:${item.price}</Text>
        </View>
        <Pressable style={styles.text} onPress={handleRemoveItem}>
          <Feather name="trash" size={24} color={"red"} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default cartItem;
