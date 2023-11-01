import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './orders.style'
import { useGetOrdersQuery } from '../../services/shopApi'

const Orders = () => {
  const {data, isLoading} = useGetOrdersQuery()

  return (
    <View style= {styles.container}>
      {!isLoading && (
        <FlatList data={data}
         renderItem={({item}) => <Text>{item}</Text>}
         key={item => item}
         />
      )}
    </View>
  )
}

export default Orders