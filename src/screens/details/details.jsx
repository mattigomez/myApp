import { View, Text , Image, Pressable} from 'react-native'
import React, { useState } from 'react'
import { AddProductModal, Header } from '../../components'
import styles from './details.style'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'


const Details = ({route}) => {
    const dispatch = useDispatch()
    const {product} = route.params
    const [isModalVisible, setModalVisible] = useState(false);

    const handleAddToCart = () => {
      dispatch(addItem({...product, quantity: 1}))
      setModalVisible(true);
    };
  
    const hideModal = () => {
      setModalVisible(false);
    };

  return (
    <View style={styles.container}>
      <Header title={'Detalle'}/>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{`$ ${product.price}`}</Text>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text style={styles.description}>{product.description}</Text>
      <Pressable onPress={handleAddToCart}>
        <Text style={styles.addProduct}>AGREGAR AL CARRITO</Text>
      </Pressable>
      <AddProductModal
        modalVisible={isModalVisible}
        confirm={hideModal}
      />
    </View>
  )
}

export default Details