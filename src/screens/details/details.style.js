import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex:1,
        
        
    },
    title: {
        paddingHorizontal:15,
        fontSize: 30,
        marginVertical: 15,
        textAlign:"auto",
        fontFamily:'AresenalBoldItalic'

    },
    image: {
        height: '30%',
        width: '90%',  
        resizeMode:"center",
        marginVertical: 20
    },
      price: {
        paddingLeft:15,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15,
      },
      description: {
        padding:30,
        fontFamily:'ArsenalItalic'
        
      },
      addProduct:{
        fontSize: 15,
        height:45,
        marginHorizontal:120,
        textAlignVertical:'center',
        textAlign:'center',
        borderRadius:10,
        backgroundColor:colors.primary
      },
    }) 