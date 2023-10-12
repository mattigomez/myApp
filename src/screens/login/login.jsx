import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import styles from './login.style'

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>
            Login to start
        </Text>
        <TextInput style={styles.inputEmail}/>
        <TextInput style={styles.inputEmail}/>
        <Pressable style={styles.loginButton}>
            <Text style={{color: 'red'}}>Login</Text>
        </Pressable>
        <Text>No tienes cuenta?</Text>
        <Pressable>
            <Text style={{color: 'red'}}>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login