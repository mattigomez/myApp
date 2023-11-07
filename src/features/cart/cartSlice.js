import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: 'userLogged',
  updatedAt: Date.now().toLocaleString(),
  total: 0,
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const products = state.items
      const productRepeated = products.find(
        item => item.id === action.payload.id
      )

      if (!productRepeated)
        return {
          ...state,
          items: [...state.items, action.payload],
          total: state.total + action.payload.price,
          updatedAt: new Date().toLocaleString(),
        }

      const itemsUpdated = products.map(item => {
        if (item.id === action.payload.id) {
          return Object.assign({}, item, {
            quantity: item.quantity + action.payload.quantity,
          })
        }
        return item
      })
      return {
        ...state,
        items: itemsUpdated,
        total: state.total + action.payload.price,
        updatedAt: new Date().toLocaleString(),
      }
    },
    removeItem: (state, action) => {
      const productIdToRemove = action.payload.id;
      const productToRemove = state.items.find(
        (item) => item.id === productIdToRemove
      );

      if (productToRemove) {
        const updatedItems = state.items.filter(
          (item) => item.id !== productIdToRemove
        );

        return {
          ...state,
          items: updatedItems,
          total: state.total - productToRemove.price * productToRemove.quantity,
          updatedAt: new Date().toLocaleString(),
        };
      }
      return state; 
    },
    clearCart: (state,action) => {
      state.items = [];
      state.total = 0;
    }
  },
})

export const { addItem, removeItem , clearCart} = cartSlice.actions

export default cartSlice.reducer