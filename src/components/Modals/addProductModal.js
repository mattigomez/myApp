import React from 'react'
import { Button, Modal as NewModal, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../constants/colors'


const AddProductModal = ({ modalVisible, confirm }) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalMessage}>
            <Text style={{fontWeight:'bold'}} >Producto agregado al carrito!</Text> 
          </View>
          <View style={styles.modalButtonContainer}>
           <View style={styles.modalButton}>
            <Button title="Confirmar" onPress={confirm} color="green" />
           </View>
          </View>
        </View>
      </View>
    </NewModal>
  )
}

export default AddProductModal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 35,
    width:300
  },
  modalMessage: {
    marginBottom: 20,
    textAlign:"center",
    alignItems:'center',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent:"space-around"
  },
  modalButton: {
    flex: 1,
    marginHorizontal:5,
  },
})