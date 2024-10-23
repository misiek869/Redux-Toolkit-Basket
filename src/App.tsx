import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './features/cart/cartSlice'
import { RootState } from './store'

function App() {
	const cartItems = useSelector((store: RootState) => store.cart)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(calculateTotals())
	}, [cartItems])

	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	)
}

export default App
