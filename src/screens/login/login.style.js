import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.secondary,
        justifyContent:'center',
        alignItems:'center'
    },
    loginContainer: {
        backgroundColor: colors.primary,
        paddingHorizontal: 25,
        width: '80%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30
    },
    inputEmail: {
        width:'95%',
        backgroundColor: colors.secondary,
        paddingHorizontal:5,
        height: 30,
        marginVertical:15,
        justifyContent:'center',
        alignItems:'center'
    },
    loginButton: {
        backgroundColor: colors.secondary,
        width: '50%',
        height: 50,
        borderRadius:10,
        marginBottom: 15,
        justifyContent:'center',
        alignItems:'center'
    }

}) 