import { View, Text, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./cart.styles";
import CartItem from "./components/cartItem";
import { useDispatch, useSelector } from "react-redux";
import { usePostOrderMutation } from "../../services/shopApi";
import { SafeAreaView } from "react-native-safe-area-context";
import { clearCart } from "../../features/cart/cartSlice";
import { CartModal } from "../../components";



const Cart = () => {
  
  const cart = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)
  const [ triggerPost , result ] = usePostOrderMutation()
  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);
  
  const renderItem= ({item}) => 
    <CartItem item={item} />
  
  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const confirmCart = () => {
    showModal();
  };

  const confirmPurchase = () => {
    triggerPost({ total, cart, user: "loggedUser" });
    dispatch(clearCart())
    hideModal();
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
          <Text style={{fontWeight:'bold'}}>{`Total $${total}`}</Text>
        </View>
        <Pressable onPress={confirmCart} style={styles.btn}>
          <Text style={{fontWeight:'bold'}}>Comprar</Text>
        </Pressable>
      </View>

         <CartModal
        modalVisible={isModalVisible}
        onHandleDelete={confirmPurchase}
        closeModal={hideModal}
      />
    </SafeAreaView>
  );
};

export default Cart;
