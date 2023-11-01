import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
   input: {
    width: '80%',
    padding:10,
    fontSize:15,
    borderWidth:1,
    borderRadius:7,
    borderColor:colors.secondary,
    backgroundColor:'red',
   },
}) 