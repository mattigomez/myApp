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
  const [error, setError] = useState(null)

  const onSubmit = () => {
    setError(null);
    //console.log(email,password);
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
    .catch(err => {
      setError('Usuario o contraseña incorrectos');
    })
  }


  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={{paddingVertical:10, fontFamily:'Arsenal'}}>
            Iniciar Sesion
        </Text>
        <TextInput style={styles.inputEmail} value={email} onChangeText={setEmail} placeholder='email'/>
        <TextInput style={styles.inputEmail} value={password} onChangeText={setPassword} secureTextEntry={true} placeholder='contraseña'/>
        {error && <Text style={{ color: 'red',fontWeight:'bold',paddingBottom:10, }}>{error}</Text>}
        <Pressable style={styles.loginButton} onPress={onSubmit}>
            <Text>Login</Text>
        </Pressable>
        <Text style={{paddingVertical:10,fontFamily:'AresenalBoldItalic'}}>No tienes cuenta?</Text>
        <Pressable style={styles.loginButton} onPress={() => navigation.navigate('Signup')}>
            <Text>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login