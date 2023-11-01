import React, { useEffect } from 'react'
import AuthStackNavigator from './authStackNavigator'
import BottomTabNavigator from './bottomTabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopApi'
import { setCameraImage, setUser } from '../features/auth/authSlice'
import { fetchSession } from '../db'


const MainNavigator = () => {
    const {user,localId} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const {data,error,isLoading} = useGetProfileImageQuery(localId)

    useEffect(() => {
        if(data) {
            dispatch(setCameraImage(data.image))
        }
    }, [data])

    useEffect(() => {
        (async () => {
            try {
                const session = await fetchSession()
                console.log('esta es la sesion', session)
                if(session.rows.length) {
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            } catch (error) {
                console.log(error.message)
            }
        })
    }, [])
    
    return user ? <BottomTabNavigator/>:<AuthStackNavigator/>
}

export default MainNavigator