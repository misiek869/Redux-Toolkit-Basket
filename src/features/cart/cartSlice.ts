import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
	cartItems: cartItems,
	amount: 2,
	total: 0,
	isLoading: true,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		clearCart: state => {
			state.cartItems = []
		},
		removeItem: (state, id) => {
			const newItems = state.cartItems.filter(item => item.id !== id)
			state.cartItems = newItems
		},
	},
})

export const { clearCart, removeItem } = cartSlice.actions

export default cartSlice.reducer
