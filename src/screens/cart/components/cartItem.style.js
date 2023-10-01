import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";



export default styles = StyleSheet.create({
    container: {
        flex:1,
        padding:9,
        backgroundColor: colors.secondary,
        borderBottomWidth:1,
        borderBottomColor: colors.tertiary
    },
    name: {
        fontSize:18,
    },
    details:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems: 'center',
        justifyContent:'space-between',
    },

}) 