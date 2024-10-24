import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const url = 'https://redux-toolkit-api.onrender.com/products'

const initialState = {
	cartItems: cartItems,
	amount: 1,
	total: 0,
	isLoading: true,
}

export const getProducts = createAsyncThunk('cart/getCartProducts', () => {
	return fetch(url)
		.then(resp => resp.json())
		.catch(err => console.log(err))
})

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
			if (cartItem) {
				cartItem.amount += 1
			}
		},
		decrease: (state, action) => {
			const { payload } = action

			const cartItem = state.cartItems.find(item => item.id === payload.id)
			if (cartItem) {
				cartItem.amount -= 1
			}
		},

		calculateTotals: state => {
			let amount = 0
			let total = 0

			state.cartItems.map(item => {
				amount += item.amount
				total += Number(item.price) * item.amount
			})

			state.amount = amount
			state.total = total
		},
	},
	extraReducers: {
		[getProducts.pending]: state => {
			state.isLoading = true
		},
		[getProducts.fulfilled]: (state, action) => {
			console.log(action)
			state.isLoading = false
			state.cartItems = action.payload
		},
		[getProducts.rejected]: state => {
			state.isLoading = false
		},
	},
})

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
	cartSlice.actions

export default cartSlice.reducer
