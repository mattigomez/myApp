import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import styles from "./cart.styles";
import cart from "../../data/cart";
import CartItem from "./components/cartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../../services/shopApi";

const Cart = () => {
  const cart = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)
  const [ triggerPost , result ] = usePostOrderMutation()
  
  const renderItem= ({item}) => (
    <CartItem item={item} />
  )
  const confirmCart = () =>{
    triggerPost({total, cart , user:'loggedUser'})    
  }

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Pressable onPress={confirmCart}>
          <Text>Confirmar</Text>
          <View>
            <Text>{`Total $${total}`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
