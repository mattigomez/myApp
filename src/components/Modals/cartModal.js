import React from 'react'
import { Button, Modal as NewModal, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../constants/colors'


const CartModal = ({ modalVisible, onHandleDelete, closeModal }) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalMessage}>
            <Text style={{fontWeight:'bold'}} >Desea confirmar la compra?</Text> 
          </View>
          <View style={styles.modalButtonContainer}>
           <View style={styles.modalButton}>
            <Button title="Confirmar" onPress={onHandleDelete} color="green" />
           </View>
           <View style={styles.modalButton}>
              <Button title="Cancelar" onPress={closeModal} color="red" />
           </View>
          </View>
        </View>
      </View>
    </NewModal>
  )
}

export default CartModal

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