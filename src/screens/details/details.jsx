import { View, Text , Image} from 'react-native'
import React from 'react'
import { Header } from '../../components'

import styles from './details.style'

const Details = ({route}) => {
    const {product} = route.params
  return (
    <View style={styles.container}>
      <Header title={'Detalle'}/>
      <Text style={styles.title}>{product.title}</Text>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{`$ ${product.price}`}</Text>
    </View>
  )
}

export default Details