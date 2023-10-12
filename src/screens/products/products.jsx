import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Header, SearchInput } from '../../components'
import React, { useEffect, useState } from 'react'
import styles from './products.style'
import { useSelector } from 'react-redux'
import { useGetProductsByCatergoryQuery } from '../../services/shopApi'

const Products = ({ navigation}) => {

  const category = useSelector(state => state.shop.categorySelected)
  const [keyword, setKeyword] = useState('') 
  const { data,isLoading } = useGetProductsByCatergoryQuery(category)
  

  useEffect(() => {
    if (data) {
      const productsFiltered = data.filter(product =>
        product.title.includes(keyword)
      )
      setArrProducts(productsFiltered)
      }
  }, [keyword])

  return (
    <View style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
      {!isLoading && (
        <FlatList
          data={Object.values(data)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { product: item })}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      )}
      </View>
    </View>
  )
}

export default Products