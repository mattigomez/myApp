import { Text,View } from "react-native";
import React from "react";
import styles from './header.style'
import { Entypo } from "@expo/vector-icons";
import { clearUser } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { deleteSession } from "../../db";


const Header = ({title}) => {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(clearUser())
        deleteSession()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Entypo name="log-out" size={28} onPress={logout}/>
        </View>
    )
}

export default Header