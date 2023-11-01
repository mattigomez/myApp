import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import styles from "./cart.styles";
import CartItem from "./components/cartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../../services/shopApi";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  const cart = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)
  const [ triggerPost , result ] = usePostOrderMutation()
  
  const renderItem= ({item}) => 
    <CartItem item={item} />
  
  const confirmCart = () =>{
    triggerPost({total, cart , user:'loggedUser'})    
  }

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={cart}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          numColumns={2}
        />
      <View style={styles.footer}>
        <View>
          <Text>{`Total $${total}`}</Text>
        </View>
        <Pressable onPress={confirmCart} style={styles.btn}>
          <Text style={{fontWeight:'bold'}}>Comprar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
