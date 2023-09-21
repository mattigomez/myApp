import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const searchInput = ({onSearch}) => {
    const [value,setValue] = useState('')

    const search = () => {
        onSearch(value)
    }
    const clearInput = () => {
        setValue('')
        onSearch('')
    }
    
  return (
    <View>
      <TextInput 
        style={styles.input} 
        value={value}
        onChangeText={setValue} 
        placeholder='Busqueda de producto'/>
    </View>
  )
}

export default searchInput