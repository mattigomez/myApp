import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './login.style'
import { useLogInMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { insertSession } from '../../db'

const Login = ({navigation}) => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [triggerLogin] = useLogInMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log(email,password);
    triggerLogin({
      email,
      password,
    })
    .unwrap()
    .then(result => {
      dispatch(setUser(result))
      insertSession({
        localId: result.localId,
        email: result.email,
        token: result.idToken,
      })
      .then(result => console.log(result))
      .catch(err => console.log(err.message))
    })
  }


  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>
            Login to start
        </Text>
        <TextInput style={styles.inputEmail} value={email} onChangeText={setEmail}/>
        <TextInput style={styles.inputEmail} value={password} onChangeText={setPassword}/>
        <Pressable style={styles.loginButton} onPress={onSubmit}>
            <Text style={{color: 'red'}}>Login</Text>
        </Pressable>
        <Text>No tienes cuenta?</Text>
        <Pressable style={styles.loginButton} onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: 'red'}}>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login