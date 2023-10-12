import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    user: 'userLogged',
    updatedAt: Date.now().toLocaleString(),
    items:[],
    total: null
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addItem: (state,action) => {
            const productRepeated = state.items.find(
                item => item.id === action.payload.id)
                if(productRepeated){
                    const itemsUpdated = state.items.map(item => {
                        if(item.id === action.payload.id) {
                            item.quantity += action.payload.quantity
                            return item
                        }
                        return
                    })
                    const total = itemsUpdated.reduce(
                        (acc, current) => (acc += current.price * current.quantity)
                    )
                    state = {
                        ...state,
                        items: itemsUpdated,
                        total,
                        updatedAt: new Date().toLocaleString()
                    }
                } else {
                    state.items.push(action.payload)
                    const total = state.items.reduce(
                        (acc,current) => (acc += current.price * current.quantity)
                    )
                    state ={
                        ...state,
                        total,
                        updatedAt: new Date().toLocaleString()
                    }
                }
        },
        removeItem: (state,action) =>{
            a
        },
    }
})

export const { addItem, removeItem} = cartSlice.actions

export default cartSlice.reducer