import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
	cartItems: cartItems,
	amount: 1,
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
		removeItem: (state, action) => {
			const itemId = action.payload
			state.cartItems = state.cartItems.filter(item => item.id !== itemId)
		},
		increase: (state, action) => {
			const { payload } = action

			const cartItem = state.cartItems.find(item => item.id === payload.id)
			cartItem.amount = cartItem.amount + 1
		},
		decrease: (state, action) => {
			const { payload } = action

			const cartItem = state.cartItems.find(item => item.id === payload.id)
			cartItem.amount = cartItem.amount - 1
		},

		calculateTotals: (state, action) => {
			let amount = 0
			let total = 0

			state.map(item => {
				amount = item.amount
			})

			state.amount = amount
		},
	},
})

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
	cartSlice.actions

export default cartSlice.reducer
