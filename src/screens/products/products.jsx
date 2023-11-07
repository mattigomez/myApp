import { FlatList, Text ,SafeAreaView ,Image , TouchableOpacity, View } from 'react-native'
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
 // console.log(data, isLoading);
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
    <SafeAreaView style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
      {!isLoading && (
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productContainer}
              onPress={() => navigation.navigate('Details', { product: item })}
            >
              <Image
                style={styles.image}
                source={{uri:item.image}}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{`$${item.price}`}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      )}
      </View>
    </SafeAreaView>
  )
}

export default Products