import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './signup.style'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'

const Signup = () => {
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [confirmPass, setConfirmPass ] = useState('')
    const [triggerSignUp, result] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log(email,password,confirmPass);
        triggerSignUp({
            email,
            password
        })
        console.log(result);
        if(result.isSuccess){
          dispatch(setUser(result))
        }
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
        <Pressable>
            <Text style={{color: 'red'}}>Ir al login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Signup