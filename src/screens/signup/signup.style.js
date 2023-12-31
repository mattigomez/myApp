import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    loginContainer: {
        backgroundColor: colors.secondary,
        paddingHorizontal: 25,
        width: '100%',
        justifyContent:'center',
        alignItems:'center'
    },
    inputEmail: {
        width:'95%',
        backgroundColor: colors.primary,
        height: 30,
        marginVertical:15,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center'
    },
    loginButton: {
        backgroundColor: colors.primary,
        width: '50%',
        height: 50,
        borderRadius:10,
        marginBottom: 15,
        justifyContent:'center',
        alignItems:'center'
    }

}) 