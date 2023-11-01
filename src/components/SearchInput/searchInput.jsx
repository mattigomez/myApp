import { View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './searchInput.style'
import { AntDesign } from '@expo/vector-icons'


const searchInput = ({onSearch}) => {
    const [value,setValue] = useState('')

    useEffect(() => {
      onSearch(value)
    }, [value])

    const search = () => {
      onSearch(value)
    }

    const clearInput = () => {
        setValue('')
        onSearch('')
    }
    
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        value={value}
        onChangeText={setValue} 
        placeholder='Busqueda de producto'/>
      <AntDesign name='search1' size={25} color={'black'} onPress={search}/>
      <AntDesign name='closecircleo' size={25} color={'black'} onPress={clearInput}/>
    </View>
  )
}

export default searchInput