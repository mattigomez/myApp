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
    const [error, setError] = useState(null)

    const onSubmit = () => {

        setError(null);

        if (password !== confirmPass) {
          setError('Las contraseñas no coinciden');
          return; 
        }
        //console.log(email,password,confirmPass);
        triggerSignup({
            email,
            password
        })
        .unwrap()
        .then(result => {
          dispatch(setUser(result))
        })
        .catch(err => {
          setError('Email no disponible');
        })
    }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>
            Registrarse
        </Text>
        <TextInput style={styles.inputEmail} value={email} onChangeText={setEmail} placeholder='email'/>
        <TextInput style={styles.inputEmail} value={password} onChangeText={setPassword} placeholder='contraseña'/>
        <TextInput style={styles.inputEmail} value={confirmPass} onChangeText={setConfirmPass} placeholder='confirmar contraseña'/>
        {error && <Text style={{ color: 'red',fontWeight:'bold', paddingBottom:15 }}>{error}</Text>}
        <Pressable style={styles.loginButton} onPress={onSubmit}>
            <Text>Confirmar</Text>
        </Pressable>
        <Text>Ya tienes una cuenta?</Text>
        <Pressable style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
            <Text>Ir al login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Signup