import React from 'react'
import AuthStackNavigator from './authStackNavigator'
import BottomTabNavigator from './bottomTabNavigator'
import { useSelector } from 'react-redux'


const MainNavigator = () => {
    const user = useSelector(state => state.auth.user)
    
    return user ? <BottomTabNavigator/>:<AuthStackNavigator/>
}

export default MainNavigator