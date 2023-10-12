import { View, Text , Image, Pressable} from 'react-native'
import React from 'react'
import { Header } from '../../components'

import styles from './details.style'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'

const Details = ({route}) => {
    const dispatch = useDispatch()
    const {product} = route.params

    const handleAddToCart = () => {
      dispatch(addItem({...product, quantity: 1}))
    }

  return (
    <View style={styles.container}>
      <Header title={'Detalle'}/>
      <Text style={styles.title}>{product.title}</Text>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{`$ ${product.price}`}</Text>
      <Pressable onPress={handleAddToCart}>
        <Text>add to cart</Text>
      </Pressable>
    </View>
  )
}

export default Details