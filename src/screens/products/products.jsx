import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Header, SearchInput } from '../../components'
import React, { useEffect, useState } from 'react'
import styles from './products.style'
import { useSelector } from 'react-redux'
import { useGetProductsByCatergoryQuery } from '../../services/shopApi'

const Products = ({ navigation}) => {

  const category = useSelector(state => state.shop.categorySelected)
  const [keyword, setKeyword] = useState('') 
  const [products, setProducts] = useState([])
  const { data,isLoading } = useGetProductsByCatergoryQuery(category)
  
  useEffect(() => {
    console.log(data, isLoading);
    if (!isLoading) {
      const dataArr = Object.values(data)
      setProducts(dataArr)
      const productsFiltered = dataArr.filter(product =>
        product.title.includes(keyword)
      )
      setProducts(productsFiltered)
      }
  }, [isLoading, keyword])

  return (
    <View style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
      {!isLoading && (
        <FlatList
          data={products}
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