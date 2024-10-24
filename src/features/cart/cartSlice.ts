import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const url = 'https://redux-toolkit-api.onrender.com/products'

const initialState = {
	cartItems: [],
	amount: 1,
	total: 0,
	isLoading: true,
}

export const getProducts = createAsyncThunk(
	'cart/getCartProducts',
	async () => {
		try {
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			return await response.json()
		} catch (err) {
			console.log(err)
			return []
		}
	}
)

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
	extraReducers: builder => {
		builder
			.addCase(getProducts.pending, state => {
				state.isLoading = true
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.isLoading = false
				state.cartItems = action.payload
			})
			.addCase(getProducts.rejected, state => {
				state.isLoading = false
			})
	},
})

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
	cartSlice.actions

export default cartSlice.reducer
