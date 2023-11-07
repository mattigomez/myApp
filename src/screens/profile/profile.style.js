import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        flex:1,
        alignItems:'center'
    },
    image: {
        marginTop:100,
        width:150,
        height:150,
        borderRadius:20
    },
    cameraButton: {
        alignItems:'center',
        padding:10,
    }

}) 