import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { setUser } from '../../features/auth/authSlice'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import styles from './signup.style'

const Signup = ({navigation}) => {
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [confirmPass, setConfirmPass ] = useState('')
    const [triggerSignup] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log(email,password,confirmPass);
        triggerSignup({
            email,
            password
        })
        .unwrap()
        .then(result => {
          console.log(result)
          dispatch(setUser(result))
        })
        .catch(err => console.log(err))
    }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>
            Registrese
        </Text>
        <TextInput style={styles.inputEmail} value={email} onChangeText={setEmail}/>
        <TextInput style={styles.inputEmail} value={password} onChangeText={setPassword}/>
        <TextInput style={styles.inputEmail} value={confirmPass} onChangeText={setConfirmPass}/>
        <Pressable style={styles.loginButton} onPress={onSubmit}>
            <Text style={{color: 'red'}}>Confirmar</Text>
        </Pressable>
        <Text>Ya tienes una cuenta?</Text>
        <Pressable style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
            <Text style={{color: 'red'}}>Ir al login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Signup