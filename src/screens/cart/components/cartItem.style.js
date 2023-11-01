import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";



export default styles = StyleSheet.create({
    container: {
        width:150,
        margin:17,
        backgroundColor:'white',
        borderRadius:20
    },
    name: {
        fontSize:14,
        fontWeight:'bold',
        padding:10,
        backgroundColor:colors.primary
    },
    imageContainer:{
        height:100,
    },
    image:{
        
        height:'100%',
        width: '100%',  
        resizeMode:"center",
        
        
    },
    details:{
        flex:1,
        backgroundColor:colors.primary,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        alignItems:'center',
    },
    detailText:{  
        alignItems: "center"
    },
    text:{
        fontSize:12,
        paddingVertical:5
    },

}) 